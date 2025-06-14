const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-start sm:items-center gap-2 sm:gap-4 p-2 sm:p-3 w-full flex-wrap">
      <img
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-900 transition-colors"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
        <span className="font-semibold text-base sm:text-lg">{name}:</span>
        <span className="text-sm sm:text-base text-gray-700">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
