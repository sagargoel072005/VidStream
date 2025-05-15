import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';


const Body = () => {
  return (
<div className="flex flex-1 bg-white text-black dark:bg-gray-900 dark:text-white">
      <Sidebar />
        <Outlet />
  </div>
  );
};

export default Body;
