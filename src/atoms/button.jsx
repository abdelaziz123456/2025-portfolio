const Button = ({ title, onClick, Icon }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-black px-10 py-2 rounded hover:bg-yellow-500 transition-colors flex items-center gap-5  "
    >
      {title}
      {Icon}
    </button>
  );
};

export default Button;
