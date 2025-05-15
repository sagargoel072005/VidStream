
const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center' >
         <img
        className="w-12 h-12 rounded-full dark:bg-gray-900 dark:bg-white transition-colors duration-300 "
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className='font-bold p-2'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage