export const Button = ({ text, className, onClick }) => {
  return (
    <div>
      <button onClick={onClick}
        className={`w-[fit-content] py-[0.8rem] px-2 text-white whitespace-nowrap text-base md:text-lg bg-[#7F56D9] font-bold rounded-lg md:py-[0.6875rem] md:px-6 hover:bg-[#7F56D9] ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export const IconButton = ({ text, className, onClick,icon }) => {
  return (
    <div>
      <button onClick={onClick}
        className={`border flex flex-row gap-3 items-center justify-center w-[fit-content] py-[0.8rem] px-2 text-slate-950 whitespace-nowrap text-base md:text-lg bg-[#ffff] rounded-lg md:py-[0.6875rem] md:px-6 ${className}`}
      >
        <img src={icon} /> <span>{text}</span>
      </button>
    </div>
  );
};
