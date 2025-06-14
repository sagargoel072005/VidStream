import {
  PlayCircle,
  Menu,
  Mic,
  Bell,
  PlusCircle,
  Search,
  Moon,
  Sun,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState, useRef } from "react";
import { YOU_TUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link, useLocation } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDark, setIsDark] = useDarkMode();
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const timerRef = useRef(null);
  const inputRef = useRef();
  const searchRef = useRef();
  const dispatch = useDispatch();
  const location = useLocation();
  const searchCache = useSelector((store) => store.search);
  const proxy = "https://thingproxy.freeboard.io/fetch/";

  const getSearchSuggestions = async (query) => {
    try {
      const response = await fetch(proxy + YOU_TUBE_SEARCH_API + query);

      const data = await response.json();
      console.log("YouTube API URL:", response);
      setSuggestions(data[1]);
      dispatch(cacheResults({ [query]: data[1] }));
    } catch (err) {
      console.error("Fetch error:", err.message);
    }
  };

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions(searchQuery);
      }
    }, 300);
  }, [getSearchSuggestions , searchCache , searchQuery ]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const ctrl = e.ctrlKey || e.metaKey;

      if (
        (e.key === "/" || (ctrl && e.key.toLowerCase() === "k")) &&
        document.activeElement !== inputRef.current
      ) {
        e.preventDefault();
        inputRef.current?.focus();
        setShowSuggestions(true);
      }

      if (e.key === "Escape") {
        inputRef.current?.blur();
        setShowSuggestions(false);
      }

      if (ctrl && e.key.toLowerCase() === "d") {
        e.preventDefault();
        setIsDark((prev) => !prev);
      }

      if ((ctrl && e.key.toLowerCase() === "m") || e.key.toLowerCase() === "v") {
        e.preventDefault();
        startListening();
      }

      if (e.key === "Enter" && document.activeElement === inputRef.current) {
        e.preventDefault();
        setShowSuggestions(false);
        inputRef.current.blur();
        const query = searchQuery.trim();
        if (query)
          window.location.href = `/results?search_query=${encodeURIComponent(
            query
          )}`;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setIsDark , searchQuery]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setSearchQuery("");
    setSuggestions([]);
    setShowSuggestions(false);
  }, [location.pathname]);

  const handleSuggestionClick = (s) => {
    setSearchQuery(s);
    setShowSuggestions(false);
    inputRef.current.focus();
  };

  const toggleMenuHandler = () => dispatch(toggleMenu());

  const startListening = () => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => setIsListening(true);
      recognition.onresult = (event) => {
        const voiceInput = event.results[0][0].transcript;
        setSearchQuery(voiceInput);
        setIsListening(false);
        inputRef.current.focus();
      };
      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);
      recognition.start();
    } else {
      alert("Speech recognition is not supported in this browser");
    }
  };

  return (
<header className="fixed top-0 left-0 z-50 w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-sm px-4 py-2">
  {/* Top Row: Logo + Dark Mode (Visible only on small screens) */}
{/* Top Row: Menu + Logo + Dark Mode (Visible only on small screens) */}
<div className="flex items-center justify-between sm:hidden mb-2">
  <div className="flex items-center gap-2">
    <button
      onClick={toggleMenuHandler}
      className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <Menu size={22} />
    </button>
    <Link to="/" className="flex items-center gap-1">
      <PlayCircle size={24} className="text-blue-600" />
      <span className="font-semibold text-lg">VidStream</span>
    </Link>
  </div>
  <button
    onClick={() => setIsDark(!isDark)}
    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
  >
    {isDark ? <Sun size={20} /> : <Moon size={20} />}
  </button>
</div>


  {/* Desktop Header: Hidden on mobile */}
  <div className="hidden sm:flex items-center justify-between">
    {/* Left Section */}
    <div className="flex items-center gap-2">
      <button
        onClick={toggleMenuHandler}
        className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <Menu size={22} />
      </button>
      <Link to="/" className="flex items-center gap-1">
        <PlayCircle size={24} className="text-blue-600" />
        <span className="font-semibold text-lg">VidStream</span>
      </Link>
    </div>

    {/* Search Section (desktop only) */}
    <div
      className="relative flex-1 mx-4 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl"
      ref={searchRef}
    >
      <div className="flex items-center bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full px-4 py-2">
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Search"
          className="flex-grow bg-transparent outline-none text-sm placeholder-gray-500 dark:placeholder-gray-400"
        />
        <Link
          to={`/results?search_query=${encodeURIComponent(searchQuery)}`}
          onClick={() => setShowSuggestions(false)}
        >
          <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full">
            <Search size={16} />
          </button>
        </Link>
        <button
          onClick={startListening}
          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
        >
          <Mic size={16} className={isListening ? "text-blue-600" : ""} />
        </button>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-50 left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((s, index) => (
            <li
              key={index}
              className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              onClick={() => handleSuggestionClick(s)}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>

    {/* Right Icons */}
    <div className="flex items-center gap-2 flex-shrink-0">
      <button className="hidden sm:inline-flex p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
        <Bell size={20} />
      </button>
      <button className="hidden sm:inline-flex p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
        <PlusCircle size={20} />
      </button>
      <button
        onClick={() => setIsDark(!isDark)}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  </div>

  {/* Mobile Search Section (visible only on small screens) */}
  <div className="sm:hidden" ref={searchRef}>
    <div className="relative">
      <div className="flex items-center bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full px-4 py-2">
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Search"
          className="flex-grow bg-transparent outline-none text-sm placeholder-gray-500 dark:placeholder-gray-400"
        />
        <Link
          to={`/results?search_query=${encodeURIComponent(searchQuery)}`}
          onClick={() => setShowSuggestions(false)}
        >
          <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full">
            <Search size={16} />
          </button>
        </Link>
        <button
          onClick={startListening}
          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
        >
          <Mic size={16} className={isListening ? "text-blue-600" : ""} />
        </button>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-50 left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((s, index) => (
            <li
              key={index}
              className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              onClick={() => handleSuggestionClick(s)}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
</header>


  );
};

export default Head;
