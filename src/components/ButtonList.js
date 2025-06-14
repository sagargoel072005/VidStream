/* ButtonList.jsx
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const ButtonList = () => {
  const navigate = useNavigate();

  const handleButtonClick = (query) => {
    navigate(`/results?search_query=${encodeURIComponent(query)}`);
  };

  const topics = [
    "All", "C++", "Java", "Python", "JavaScript", "Computer programming",
    "Web Development", "Watched", "Recently Uploaded", "Animated Films", "Movie musicals"
  ];

  return (
    <div className="flex flex-wrap justify-center mt-20 sm:mt-30 ">
      {topics.map((topic) => (
        <Button key={topic} name={topic} onClick={handleButtonClick} />
      ))}
    </div>
  );
};

export default ButtonList;
*/

import Button from "./Button";
import { useNavigate } from "react-router-dom";

const ButtonList = () => {
  const navigate = useNavigate();

  const handleButtonClick = (query) => {
    navigate(`/results?search_query=${encodeURIComponent(query)}`);
  };

  const topics = [
    "All", "C++", "Java", "Python", "JavaScript", "Computer programming",
    "Web Development", "Watched", "Recently Uploaded", "Animated Films", "Movie musicals"
  ];

  return (
    <div className="w-full">
      {/* Mobile view: show only 3 buttons with scroll */}
       <div className="sm:hidden flex gap-2 px-2 mt-28 overflow-x-auto scrollbar-hide">
        {topics.slice(0, 5).map((topic) => (
          <Button key={topic} name={topic} onClick={handleButtonClick} />
        ))}
      </div>

      {/* Desktop view: show all buttons aligned left */}
      <div className="hidden sm:flex flex-wrap gap-3 mt-20 px-3">
        {topics.map((topic) => (
          <Button key={topic} name={topic} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
