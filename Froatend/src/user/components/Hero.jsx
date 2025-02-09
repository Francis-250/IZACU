import { FaCloudDownloadAlt, FaPlayCircle } from "react-icons/fa";
import { heroContent } from "../../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  const hero = heroContent[0];

  return (
    <div className="relative min-h-[75vh] bg-white border border-gray-400 text-black mt-2 rounded-lg flex items-center p-4 md:p-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.thumbnail})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between w-full text-white">
          <div className="flex flex-col gap-4 md:w-[60%] w-full">
            <div className="flex flex-wrap gap-2">
              <span className="border border-gray-300 px-3 py-1 rounded text-sm bg-white bg-opacity-20">
                {hero.isNew ? "Filime Nshya" : "Filime"}
              </span>
              <span className="border border-gray-300 px-3 py-1 rounded text-sm bg-white bg-opacity-20">
                {hero.narrator}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">
              {hero.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2">
              <span className="border border-gray-300 px-3 py-1 rounded text-sm bg-white bg-opacity-20">
                {hero.genre[0]}
              </span>
              <span className="border border-gray-300 px-3 py-1 rounded text-sm bg-white bg-opacity-20">
                {hero.genre[1]}
              </span>
              <span className="text-lg mx-2">|</span>
              <span className="text-lg">{hero.RealDate}</span>
            </div>
            <p className="text-lg text-gray-300 mt-2">{hero.desc}</p>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <Link
                to={`/movie/${hero.id}`}
                className="flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-500 transition text-white font-semibold rounded-lg shadow-md gap-2 w-full md:w-auto"
              >
                <FaPlayCircle className="text-xl" />
                {hero.buttons[0]}
              </Link>
              <Link
                to={`/movie/${hero.id}`}
                className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-500 transition text-white font-semibold rounded-lg shadow-md gap-2 w-full md:w-auto"
              >
                <FaCloudDownloadAlt className="text-xl" />
                {hero.buttons[1]}
              </Link>
            </div>
          </div>
          <div>
            <Link
              to={`/movie/${hero.id}`}
              className="px-6 py-3 rounded-lg hidden md:flex items-center justify-center gap-2 text-white font-semibold hover:bg-[#1aa84c] transition-colors"
            >
              <FaPlayCircle className="text-5xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
