
const DigiForamLogo = () => {
  return (
    <div className="flex items-center gap-2 md:gap-3 select-none">
      
      {/* 1. THE BIRD ICON */}
      {/* Mobile: w-8 h-8 | Desktop: w-12 h-12 */}
      <div className="relative w-8 h-8 md:w-12 md:h-12 flex-shrink-0 transition-all duration-300">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 90 L20 30 L60 60 Z" fill="#0047AB" />
          <path d="M20 30 L5 10 L60 60 Z" fill="#007FFF" />
          <path d="M20 30 L50 5 L60 60 Z" fill="#007FFF" />
          <path d="M50 5 L70 20 L45 25 Z" fill="#0047AB" />
        </svg>
      </div>

      {/* 2. THE TEXT PART */}
      <div className="flex flex-col justify-center">
        {/* Main Title */}
        {/* Mobile: text-xl | Desktop: text-3xl */}
        <h1 className="text-xl md:text-3xl font-bold text-black tracking-tight leading-none font-sans transition-all duration-300">
          DigiForam
        </h1>
        {/* Slogan */}
        {/* Mobile: text-[8px] | Desktop: text-[10px] */}
        <p className="text-[8px] md:text-[10px] font-bold text-[#0047AB] tracking-widest uppercase mt-0.5 leading-none font-sans transition-all duration-300">
          Your Vision Is Our Strategy
        </p>
      </div>
    </div>
  );
};

export default DigiForamLogo;