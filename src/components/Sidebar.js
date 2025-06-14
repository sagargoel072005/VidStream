import {
  Home, Flame, History, ListVideo, Video, GraduationCap, Clock, ThumbsUp, ShoppingBag, Music,
  Clapperboard, Radio, Gamepad2, Newspaper, Dumbbell, Shirt, Mic2, Crown, Music2, MonitorPlay,
  Baby, Settings, Flag, HelpCircle, MessageSquare
} from 'lucide-react';

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toggleMenu } from '../utils/appSlice';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  const [showSubscriptions, setShowSubscriptions] = useState(false);

  if (!isMenuOpen) return null;

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
        onClick={() => dispatch(toggleMenu())}
      />

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 z-40 h-full w-64 bg-white dark:bg-gray-900 dark:text-white border-r 
          transition-transform transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          sm:translate-x-0 sm:static sm:h-screen
        `}
      >
        <div className="overflow-y-auto h-full p-4 pt-24 sm:pt-20 sticky top-0">
          {/* Close Button (only on mobile) */}
          <button
            className="sm:hidden absolute top-4 right-4 text-black dark:text-white text-xl"
            onClick={() => dispatch(toggleMenu())}
          >
            ✕
          </button>

          {/* Menu Links */}
          <ul className="space-y-2">
            <SidebarLink icon={<Home size={20} />} label="Home" to="/" />
            <SidebarLink icon={<Flame size={20} />} label="Shorts" to="/shorts" />
            <li
              className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => setShowSubscriptions(!showSubscriptions)}
            >
              <ListVideo size={20} />
              Subscriptions
            </li>
          </ul>

          {showSubscriptions && (
            <ul className="space-y-1 pl-8 text-sm text-gray-700 mt-2 dark:text-gray-300">
              {['Code with Harry', 'Shraddha Khapra', 'Chai Aur Code', 'Love Babbar', 'Akshay Saini'].map((name) => (
                <li key={name} className="hover:text-black dark:hover:text-white cursor-pointer">{name}</li>
              ))}
            </ul>
          )}

          <SidebarSection title="You >">
            <SidebarLink icon={<History size={20} />} label="History" to="/history" />
            <SidebarLink icon={<ListVideo size={20} />} label="Playlist" />
            <SidebarLink icon={<Video size={20} />} label="Your Videos" />
            <SidebarLink icon={<GraduationCap size={20} />} label="Your Courses" />
            <SidebarLink icon={<Clock size={20} />} label="Watch Later" />
            <SidebarLink icon={<ThumbsUp size={20} />} label="Liked Videos" />
          </SidebarSection>

          <SidebarSection title="Explore">
            <SidebarLink icon={<Flame size={20} />} label="Trending" to="/trending" />
            <SidebarLink icon={<ShoppingBag size={20} />} label="Shopping" to="/shopping" />
            <SidebarLink icon={<Music size={20} />} label="Music" to="/music" />
            <SidebarLink icon={<Clapperboard size={20} />} label="Movies" to="/movies" />
            <SidebarLink icon={<Radio size={20} />} label="Live" to="/live" />
            <SidebarLink icon={<Gamepad2 size={20} />} label="Gaming" to="/gaming" />
            <SidebarLink icon={<Newspaper size={20} />} label="News" to="/news" />
            <SidebarLink icon={<Dumbbell size={20} />} label="Sports" to="/sports" />
            <SidebarLink icon={<Shirt size={20} />} label="Fashion" to="/fashion" />
            <SidebarLink icon={<Mic2 size={20} />} label="Podcast" to="/podcast" />
          </SidebarSection>

          <SidebarSection title="More from VidStream">
            <SidebarLink icon={<Crown size={20} />} label="VidStream Premium" to="/vidStreampremium" />
            <SidebarLink icon={<Music2 size={20} />} label="VidStream Music" to="/vidStreammusic" />
            <SidebarLink icon={<MonitorPlay size={20} />} label="VidStream Studio" to="/vidStreamstudio" />
            <SidebarLink icon={<Baby size={20} />} label="VidStream Kids" to="/vidStreamkids" />
          </SidebarSection>

          <ul className="space-y-2 mt-6 border-t pt-4">
            <SidebarLink icon={<Settings size={20} />} label="Settings" />
            <SidebarLink icon={<Flag size={20} />} label="Report History" />
            <SidebarLink icon={<HelpCircle size={20} />} label="Help" />
            <SidebarLink icon={<MessageSquare size={20} />} label="Send Feedback" />
          </ul>

          {/* Footer */}
          <div className="mt-6 text-xs text-gray-500 dark:text-gray-400 space-y-2">
            <div className="flex flex-wrap gap-2">
              {['About', 'Press', 'Copyright', 'Contact us', 'Creators', 'Advertise', 'Developers'].map(text => (
                <p key={text} className="hover:underline cursor-pointer">{text}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {['Terms', 'Privacy', 'Policy & Safety', 'How VidStream works', 'Test new features'].map(text => (
                <p key={text} className="hover:underline cursor-pointer">{text}</p>
              ))}
            </div>
            <p className="text-[11px] text-gray-400">© 2025 VidStream LLC</p>
          </div>
        </div>
      </div>
    </>
  );
};

const SidebarSection = ({ title, children }) => (
  <>
    <h2 className="mt-6 mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">{title}</h2>
    <ul className="space-y-2">{children}</ul>
  </>
);

const SidebarLink = ({ icon, label, to }) => {
  const classes = "flex items-center gap-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer";
  return (
    <li className={classes}>
      {icon}
      {to ? <Link to={to}>{label}</Link> : label}
    </li>
  );
};

export default Sidebar;
