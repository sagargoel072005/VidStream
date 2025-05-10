import React from 'react';
import { PlayCircle, Menu, Mic, Bell, PlusCircle, Search } from 'lucide-react'; // npm install lucide-react

const Head = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md w-full">
      {/* Left - Menu and Logo */}
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded">
          <Menu size={24} />
        </button>
        <div className="flex items-center space-x-2">
          <PlayCircle size={32} color="red" />
          <span className="text-xl font-bold text-gray-800">VidStream</span>
        </div>
      </div>

      {/* Center - Search Bar with Mic */}
      <div className="flex items-center border rounded-full px-3 py-1 shadow-sm w-1/2 max-w-md">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-2 py-1 outline-none text-sm"
        />
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Search size={20} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Mic size={20} />
        </button>
      </div>

      {/* Right - Notification and Create */}
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
