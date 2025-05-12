import { useDispatch, useSelector } from 'react-redux';
import ChatMessage from './ChatMessage';
import { useEffect, useState } from 'react';
import SideVideoContainer from "./SideVideosContainer";
import { addMessage } from '../utils/chatSlice';
import { generateRandomChatMessage, generateRandomNames } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    const [userInput, setUserInput] = useState("");

    useEffect(() => {
        const i = setInterval(() => {
            dispatch(addMessage({
                name: generateRandomNames(),
                message: generateRandomChatMessage(),
            }));
        }, 1500);
        return () => clearInterval(i);
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userInput.trim()) return;

        dispatch(addMessage({
            name: "You",
            message: userInput,
        }));

        setUserInput("");
    };


    return (
        <>
        <div className="w-full h-[550px] ml-2 p-2 border border-gray-300 bg-white rounded-lg shadow-md flex flex-col">
            <div className="h-[480px] overflow-y-scroll flex flex-col-reverse px-2 space-y-2">
                {chatMessages.map((c, i) => (
                    <ChatMessage key={i} name={c.name} message={c.message} />
                ))}
            </div>

            <form onSubmit={handleSubmit} className="flex mt-2">
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
            <div>
       
            </div>
        </div>
        <h1 className='text-2xl font-bold m-3'>Recommended videos</h1>
        <div className="w-full h-[2344px] ml-2 p-2 border border-gray-300 bg-white rounded-lg shadow-md flex flex-col">
            <div className="h-[2334px] overflow-y-scroll flex flex-col-reverse px-2 space-y-2">
             <SideVideoContainer />
        </div>
        </div>
          
        </>
    );
};

export default LiveChat;
