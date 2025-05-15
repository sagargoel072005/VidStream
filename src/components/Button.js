const Button = ({ name , onClick}) => {
  return (
    <button 
    className="m-2 p-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg hover:from-teal-400 hover:to-blue-500 transition duration-300"
     onClick={() => onClick(name)}>
      {name}
    </button>
  );
}

export default Button;