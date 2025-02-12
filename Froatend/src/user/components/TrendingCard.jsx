import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../../user/components/Loading";
import { useEffect, useState } from "react";
import axios from "axios";

const TrendingCard = () => {
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
    <div>
      {data ? (
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
            {data.slice(0, 6).map((content) => (
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
                  <h3 className="text-lg font-semibold mt-2">
                    {content.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div>No Movie Avalible Now</div>
      )}
    </div>
  );
};

export default TrendingCard;
