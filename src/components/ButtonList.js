// ButtonList.jsx
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
    <div className="flex flex-wrap justify-center mt-20">
      {topics.map((topic) => (
        <Button key={topic} name={topic} onClick={handleButtonClick} />
      ))}
    </div>
  );
};

export default ButtonList;
