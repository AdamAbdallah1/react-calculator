function Button({ value, onClick, className, children }) {
    return (
    <button
      onClick={onClick}
      className={`text-2xl w-full cursor-pointer rounded-4xl py-4 text-white hover:bg-blue-400 ${className}`}
    >
      {children || value}
    </button>
  );
}

export default Button