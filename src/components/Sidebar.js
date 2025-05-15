import {
  Home, Flame, History, ListVideo, Video, GraduationCap, Clock, ThumbsUp, ShoppingBag, Music,
  Clapperboard, Radio, Gamepad2, Newspaper, Dumbbell, Shirt, Mic2, Crown, Music2, MonitorPlay,
  Baby, Settings, Flag, HelpCircle, MessageSquare
} from 'lucide-react';

import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [showSubscriptions, setShowSubscriptions] = useState(false);

  if (!isMenuOpen) return null;

  return (
    <div className="w-64 h-screen bg-white border-r mt-0 flex flex-col">
      <div className="overflow-y-auto h-full p-4 mt-20">
        {/* Top Links */}
        <ul className="space-y-2">
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><Home size={20} /><Link to="/">Home</Link></li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><Flame size={20} /><Link to="/shorts"> Shorts</Link></li>
          <li
            className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => setShowSubscriptions(!showSubscriptions)}
          >
            <ListVideo size={20} />
            Subscriptions
          </li>
        </ul>

        {/* Conditional Subscription List */}
        {showSubscriptions && (
          <ul className="space-y-1 pl-8 text-sm text-gray-700 mt-2">
            <li className="hover:text-black cursor-pointer">Code with Harry</li>
            <li className="hover:text-black cursor-pointer">Shraddha Khapra</li>
            <li className="hover:text-black cursor-pointer">Chai Aur Code</li>
            <li className="hover:text-black cursor-pointer">Love Babbar</li>
            <li className="hover:text-black cursor-pointer">Akshay Saini</li>
          </ul>
        )}

        {/* Other Sections */}
        <h2 className="mt-6 mb-2 text-sm font-semibold text-gray-500">You &gt;</h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><History size={20} /> History</li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><ListVideo size={20} /> Playlist</li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><Video size={20} /> Your Videos</li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><GraduationCap size={20} /> Your Courses</li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><Clock size={20} /> Watch Later</li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><ThumbsUp size={20} /> Liked Videos</li>
        </ul>

        <h2 className="mt-6 mb-2 text-sm font-semibold text-gray-500">Explore</h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><Flame size={20} /> Trending</li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><ShoppingBag size={20} /> Shopping</li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><Music size={20} /> Music</li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><Clapperboard size={20} /> Movies</li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><Radio size={20} /> Live</li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><Gamepad2 size={20} /> Gaming</li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><Newspaper size={20} /> News</li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><Dumbbell size={20} /> Sports</li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><Shirt size={20} /> Fashion</li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><Mic2 size={20} /> Podcast</li>
        </ul>

        <h2 className="mt-6 mb-2 text-sm font-semibold text-gray-500">More from VidStream</h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><Crown size={20} /> VidStream Premium</li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><Music2 size={20} /> VidStream Music</li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><MonitorPlay size={20} /> VidStream Studio</li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><Baby size={20} /> VidStream Kids</li>
        </ul>

        <ul className="space-y-2 mt-6 border-t pt-4">
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><Settings size={20} /> Settings</li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><Flag size={20} /> Report History</li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><HelpCircle size={20} /> Help</li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"><MessageSquare size={20} /> Send Feedback</li>
        </ul>

        {/* Better Footer Text */}
        <div className="mt-6 text-xs text-gray-500 space-y-2">
          <div className="flex flex-wrap gap-2">
            <p className="hover:underline cursor-pointer">About</p>
            <p className="hover:underline cursor-pointer">Press</p>
            <p className="hover:underline cursor-pointer">Copyright</p>
            <p className="hover:underline cursor-pointer">Contact us</p>
            <p className="hover:underline cursor-pointer">Creators</p>
            <p className="hover:underline cursor-pointer">Advertise</p>
            <p className="hover:underline cursor-pointer">Developers</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <p className="hover:underline cursor-pointer">Terms</p>
            <p className="hover:underline cursor-pointer">Privacy</p>
            <p className="hover:underline cursor-pointer">Policy & Safety</p>
            <p className="hover:underline cursor-pointer">How VidStream works</p>
            <p className="hover:underline cursor-pointer">Test new features</p>
          </div>
          <p className="text-[11px] text-gray-400">© 2025 VidStream LLC</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
