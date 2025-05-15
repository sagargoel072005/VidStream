import { useDispatch, useSelector } from 'react-redux';
import ChatMessage from './ChatMessage';
import { useEffect, useState } from 'react';
import { addMessage } from '../utils/chatSlice';
import { generateRandomChatMessage, generateRandomNames } from '../utils/helper';
import SideVideoContainer from './Recomendations'; // Assuming this is the same as improved video list

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomChatMessage(),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    dispatch(
      addMessage({
        name: "You",
        message: userInput,
      })
    );
    setUserInput("");
  };

  return (
    <div className="w-full px-4 space-y-6">
      {/* Live Chat Box */}
      <div className="h-[550px] p-4 border border-gray-300 bg-white rounded-lg shadow-md flex flex-col dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <h2 className="text-lg font-bold mb-2 text-blue-600">Live Chat</h2>
        <div className="flex-1 overflow-y-scroll flex flex-col-reverse space-y-2">
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex mt-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-400 rounded-l-lg focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>

      {/* Recommended Videos */}
      <div>
        <h1 className="text-2xl font-bold mb-4 text-blue-700">Recommended Videos</h1>

        <div className="max-h-[2330px] overflow-y-auto p-1 border border-gray-300 bg-white rounded-lg shadow-md space-y-4">
          <SideVideoContainer />
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
