import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { heroContent } from "../../assets/assets";
import { Link } from "react-router-dom";

const TrendingCard = () => {
  if (!heroContent || heroContent.length === 0) {
    return <p className="text-white text-center">No movies available</p>;
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <header className="text-2xl capitalize mt-4 text-white">
          Trending Movies
          <div className="p-1 mt-2 rounded-full w-20 bg-white"></div>
        </header>
        <div className="flex gap-6">
          <div className="p-3 bg-black border rounded-full cursor-pointer">
            <FaArrowLeft className="text-white" />
          </div>
          <div className="p-3 bg-black border rounded-full cursor-pointer">
            <FaArrowRight className="text-white" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4">
        {heroContent.map(
          (content) =>
            content.type === 1 && (
              <Link
                to={`/movie/${content.id}`}
                key={content.id}
                className="relative rounded-lg overflow-hidden group cursor-pointer min-h-[250px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${content.thumbnail})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  {content.genre?.map((genre, index) => (
                    <span
                      key={index}
                      className="border border-white px-3 py-1 rounded text-xs bg-black"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-0 w-full p-4 text-white z-10">
                  <span className="border border-white px-3 py-1 rounded text-xs bg-white bg-opacity-20">
                    {content.narrator}
                  </span>
                  <h3 className="text-lg font-semibold mt-2">
                    {content.title}
                  </h3>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default TrendingCard;
