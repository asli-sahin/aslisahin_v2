import { texts } from "../config/texts";

function MainText() {
  return (
    <div className="text-center md:text-left w-full">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 md:mb-4 leading-[1.1] py-2">
        {texts.mainText.name}
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 md:mb-6">
        {texts.mainText.title}
      </h2>
      <div className="border-l-2 border-pink-400 pl-6">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-md mx-auto md:mx-0">
          {texts.mainText.description}
        </p>
      </div>
    </div>
  );
}

export default MainText;
