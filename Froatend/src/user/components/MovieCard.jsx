import { country, genre, narrators } from "../../assets/assets";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Loading from "../../user/components/Loading";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieCard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Get Data
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:3000/movies")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col gap-2 mt-3">
      <div className="flex flex-col gap-6 p-4 bg-gray-800 rounded-lg shadow-lg">
        <div className="flex flex-col w-full">
          <header className="text-3xl font-bold capitalize text-white w-full">
            All Movies
            <div className="h-[2px] w-full bg-gray-600 mt-2"></div>
          </header>
          <div className="mt-4">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-lg text-gray-300 font-medium">
                  Choose Narrator
                </label>
                <select className="bg-gray-700 text-white p-2 rounded-lg outline-none focus:ring-2 focus:ring-green-400">
                  {narrators.map((narrator, index) => (
                    <option key={index} value={narrator}>
                      {narrator}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-lg text-gray-300 font-medium">
                  Choose Genre
                </label>
                <select className="bg-gray-700 text-white p-2 rounded-lg outline-none focus:ring-2 focus:ring-green-400">
                  {genre.map((genre, index) => (
                    <option key={index} value={genre}>
                      {genre}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-lg text-gray-300 font-medium">
                  Choose Country
                </label>
                <select className="bg-gray-700 text-white p-2 rounded-lg outline-none focus:ring-2 focus:ring-green-400">
                  {country.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center justify-center">
                <button className="flex items-center gap-2 p-3 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition-colors">
                  <FaSearch />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cards */}
      <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4">
        {data.map((content) => (
          <Link
            to={`/movie/${content.id}`}
            key={content.id}
            className="relative rounded-lg overflow-hidden group cursor-pointer min-h-[250px]"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="border border-white px-3 py-1 rounded text-xs bg-black">
                {content.category}
              </span>
            </div>
            <div className="absolute bottom-0 w-full p-4 text-white z-10">
              <span className="border border-white px-3 py-1 rounded text-xs bg-white/20">
                {content.translator}
              </span>
              <h3 className="text-lg font-semibold mt-2">{content.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
