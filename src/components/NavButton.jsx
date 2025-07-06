function NavButton({ key, value, onClick, className, children }) {
    return (
        <button
      onClick={onClick}
      className={`text-2xl w-18 cursor-pointer rounded-4xl py-4 text-white hover:bg-blue-400 ${className}`}
    >
      {children || value}
    </button>
    )
}

export default NavButton