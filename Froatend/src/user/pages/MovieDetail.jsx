import { useNavigate, Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaCloudDownloadAlt,
  FaPlay,
  FaPlayCircle,
  FaStarHalfAlt,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";
import Loading from "../../user/components/Loading";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetail = () => {
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

  const navigate = useNavigate();
  const { id } = useParams();
  const movie = data.find((m) => m.id === parseInt(id, 10));

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-4 flex flex-col text-white">
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="p-2 flex items-center justify-center rounded-full border border-gray-500 hover:bg-gray-700 transition"
          aria-label="Go back"
        >
          <FaArrowLeft className="text-2xl" />
        </button>
        <Link
          to={`/watch/${movie.id}`}
          className="p-2 md:hidden flex items-center justify-center rounded-full border border-gray-500 hover:bg-gray-700 transition"
        >
          <FaPlay className="text-2xl" />
        </Link>
        <Link
          to={`/download/${movie.id}`}
          className="p-2 md:hidden flex items-center justify-center rounded-full border border-gray-500 hover:bg-gray-700 transition"
        >
          <FaCloudDownloadAlt className="text-2xl" />
        </Link>
      </div>

      <div className="mt-6 flex flex-col lg:flex-row items-center gap-6">
        <div className="w-full lg:w-1/2">
          <div className="w-full h-[50vh] md:h-[60vh] bg-cover bg-center rounded-lg shadow-lg bg-black"></div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{movie.title}</h1>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md">
              New Release
            </span>
            <span className="px-4 py-2 border border-gray-500 text-sm font-medium rounded-md">
              {movie.translator}
            </span>
          </div>

          <p className="text-gray-300 leading-relaxed">{movie.description}</p>

          <div className="flex flex-wrap gap-2">
            <span className="text-lg font-semibold">Genre:</span>
            <span className="px-3 py-1 text-sm bg-gray-700 rounded-md">
              {movie.translator}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-lg">
              <strong>Released:</strong> {movie.release_date}
            </span>
            <span className="text-lg">
              <strong>Country:</strong> {movie.country}
            </span>
            <span className="text-lg">
              <strong>Actor:</strong> {movie.translator}
            </span>
            <span className="text-lg">
              <strong>Translator:</strong> {movie.translator}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">Rate Us:</span>
            <span className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <FaStarHalfAlt key={i} className="text-2xl text-yellow-500" />
              ))}
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <Link
              to={`/watch/${movie.id}`}
              className="flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-500 transition text-white font-semibold rounded-lg shadow-md gap-2 w-full md:w-auto"
            >
              <FaPlayCircle className="text-xl" />
              Play
            </Link>
            <Link
              to={`/download/${movie.id}`}
              className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-500 transition text-white font-semibold rounded-lg shadow-md gap-2 w-full md:w-auto"
            >
              <FaCloudDownloadAlt className="text-xl" />
              Download
            </Link>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="p-3 border border-gray-700 rounded-lg hover:bg-gray-700 transition">
              <FaThumbsUp className="text-xl" />
            </button>
            <button className="p-3 border border-gray-700 rounded-lg hover:bg-gray-700 transition">
              <FaThumbsDown className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
