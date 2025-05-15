import {
  PlayCircle,
  Menu,
  Mic,
  Bell,
  PlusCircle,
  Search,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState, useRef } from "react";
import { YOU_TUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link, useLocation } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
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

  // Fetch search suggestions
  const getSearchSuggestions = async (query) => {
    try {
      const response = await fetch(proxy + YOU_TUBE_SEARCH_API + query);
      const data = await response.json();
      setSuggestions(data[1]);
      dispatch(cacheResults({ [query]: data[1] }));
    } catch (err) {
      console.error("Fetch error:", err.message);
    }
  };

  // Debounce logic for fetching suggestions
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
  }, [searchQuery]);

  // Hide suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Clear search on route change
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

  // Voice search
  const startListening = () => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const voiceInput = event.results[0][0].transcript;
        setSearchQuery(voiceInput);
        setIsListening(false);
        inputRef.current.focus();
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      alert("Speech recognition is not supported in this browser");
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between">
      {/* Logo and Menu */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleMenuHandler}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <Menu size={24} />
        </button>
        <div className="flex items-center gap-2">
          <PlayCircle size={32} className="text-blue-600" />
          <h1 className="text-xl font-semibold text-gray-800">VidStream</h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative flex-1 mx-6 max-w-2xl" ref={searchRef}>
        <div className="flex items-center bg-gray-100 border border-gray-300 rounded-full px-4 py-2 shadow-inner focus-within:ring-2 focus-within:ring-blue-500">
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Search..."
            className="flex-grow bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500"
          />

          <Link
            to={`/results?search_query=${encodeURIComponent(searchQuery)}`}
            onClick={() => setShowSuggestions(false)}
          >
            <button className="p-2 hover:bg-gray-200 rounded-full transition">
              <Search size={18} className="text-gray-600" />
            </button>
          </Link>

          <button
            className="p-2 hover:bg-gray-200 rounded-full transition"
            onClick={startListening}
          >
            <Mic
              size={18}
              className={`text-gray-600 ${isListening ? "text-blue-600" : ""}`}
            />
          </button>
        </div>

        {/* Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto z-50">
            {suggestions.map((s, index) => (
              <li
                key={index}
                onMouseDown={() => handleSuggestionClick(s)}
                className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer flex items-center"
              >
                <Search size={16} className="mr-2 text-gray-400" />
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Icons */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell size={22} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <PlusCircle size={22} />
        </button>
      </div>
    </header>
  );
};

export default Head;



/**
 * import { PlayCircle, Menu, Mic, Bell, PlusCircle, Search } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { useEffect, useState, useRef } from 'react';
import { YOU_TUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { Link } from 'react-router-dom';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const timerRef = useRef(null);
  const inputRef = useRef();
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);
  const proxy = "https://thingproxy.freeboard.io/fetch/";

  const getSearchSuggestions = async (query) => {
    try {
      const response = await fetch(proxy + YOU_TUBE_SEARCH_API + query);
      const data = await response.json();
      setSuggestions(data[1]);
      dispatch(cacheResults({ [searchQuery]: data[1] }));
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
  }, [searchQuery]);

  const handleSuggestionClick = (s) => {
    setSearchQuery(s);
    setShowSuggestions(false);
    inputRef.current.focus();
  };

  const toggleMenuHandler = () => dispatch(toggleMenu());

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between">
  
      <div className="flex items-center gap-4">
        <button onClick={toggleMenuHandler} className="p-2 rounded-full hover:bg-gray-100">
          <Menu size={24} />
        </button>
        <div className="flex items-center gap-2">
          <PlayCircle size={32} className="text-blue-600" />
          <h1 className="text-xl font-semibold text-gray-800">VidStream</h1>
        </div>
      </div>

      <div className="relative flex-1 mx-6 max-w-2xl">
        <div className="flex items-center bg-gray-100 border border-gray-300 rounded-full px-4 py-2 shadow-inner focus-within:ring-2 focus-within:ring-blue-500">
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Search..."
            className="flex-grow bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500"
          />

          <Link to={`/results?search_query=${encodeURIComponent(searchQuery)}`} onClick={() => setShowSuggestions(false)}>
            <button className="p-2 hover:bg-gray-200 rounded-full transition">
              <Search size={18} className="text-gray-600" />
            </button>
          </Link>

          <button className="p-2 hover:bg-gray-200 rounded-full transition">
            <Mic size={18} className="text-gray-600" />
          </button>
        </div>

            {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto z-50">
            {suggestions.map((s, index) => (
              <li
                key={index}
                onMouseDown={() => handleSuggestionClick(s)}
                className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer flex items-center"
              >
                <Search size={16} className="mr-2 text-gray-400" />
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>

  
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell size={22} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <PlusCircle size={22} />
        </button>
      </div>
    </header>
  );
};

export default Head;

 */