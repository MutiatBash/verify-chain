export const Button = ({ text, className }) => {
  return (
    <div>
      <button
        className={`w-[fit-content] py-[0.8rem] px-2 text-white whitespace-nowrap text-base md:text-lg bg-[#7F56D9] font-bold rounded-md md:py-[0.6875rem] md:px-6 hover:bg-[#7F56D9] ${className}`}
      >
        {text}
      </button>
    </div>
  );
};
