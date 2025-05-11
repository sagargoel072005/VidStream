import { PlayCircle, Menu, Mic, Bell, PlusCircle, Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { useEffect, useState, useRef } from 'react';
import { YOU_TUBE_SEARCH_API } from '../utils/constants';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const timerRef = useRef(null);
  const inputRef = useRef(); // 🆕 input ref
  const dispatch = useDispatch();

  const proxy = "https://thingproxy.freeboard.io/fetch/";

  const getSearchSuggestions = async (query) => {
    try {
      const response = await fetch(proxy + YOU_TUBE_SEARCH_API + query); // fixed
      const data = await response.json();
      setSuggestions(data[1]);
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
      getSearchSuggestions(searchQuery);
    }, 300);
  }, [searchQuery]);

  const handleSuggestionClick = (s) => {
    setSearchQuery(s);
    setShowSuggestions(false);
    inputRef.current.focus(); // 🆕 focus input again
  };

  const toggleMenuHandler = () => dispatch(toggleMenu());

  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-md w-full">
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded" onClick={toggleMenuHandler}>
          <Menu size={24} />
        </button>
        <div className="flex items-center space-x-2">
          <PlayCircle size={32} color="blue" />
          <span className="text-xl font-bold text-gray-800">VidStream</span>
        </div>
      </div>

      <div className="relative flex items-center border rounded-full px-3 py-1 shadow-sm w-1/2 max-w-md bg-white">
        <input
          ref={inputRef} // 🆕 assign ref
          type="text"
          placeholder="Search"
          className="flex-1 px-2 py-1 outline-none text-sm"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
         onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        />
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Search size={20} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Mic size={20} />
        </button>

        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute top-12 left-0 bg-white w-full shadow-lg rounded-lg z-50 max-h-60 overflow-y-auto border">
            {suggestions.map((s, index) => (
              <li
                key={index}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center"
                onClick={() => handleSuggestionClick(s)}
              >
                <Search size={16} className="mr-2 text-gray-500" />
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <button className="hover:bg-gray-100 p-2 rounded-full">
          <Bell size={24} />
        </button>
        <button className="hover:bg-gray-100 p-2 rounded-full">
          <PlusCircle size={24} />
        </button>
      </div>
    </header>
  );
};

export default Head;
