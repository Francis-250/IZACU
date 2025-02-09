import { useNavigate, Link, useParams } from "react-router-dom";
import { heroContent } from "../../assets/assets";
import {
  FaArrowLeft,
  FaCloudDownloadAlt,
  FaPlay,
  FaPlayCircle,
  FaStarHalfAlt,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";

const MovieDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const movie = heroContent.find((m) => m.id === parseInt(id, 10));

  if (!movie) {
    return <div className="text-center text-white text-xl">No Movie Found</div>;
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
          <div
            className="w-full h-[50vh] md:h-[60vh] bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${movie.thumbnail})` }}
          ></div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{movie.title}</h1>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md">
              {movie.isNew ? "New Release" : "Classic"}
            </span>
            <span className="px-4 py-2 border border-gray-500 text-sm font-medium rounded-md">
              {movie.narrator}
            </span>
          </div>

          <p className="text-gray-300 leading-relaxed">{movie.desc}</p>

          <div className="flex flex-wrap gap-2">
            <span className="text-lg font-semibold">Genre:</span>
            {movie.genre.map((genre, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-gray-700 rounded-md"
              >
                {genre}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-lg">
              <strong>Released:</strong> {movie.RealDate}
            </span>
            <span className="text-lg">
              <strong>Country:</strong> {movie.country}
            </span>
            <span className="text-lg">
              <strong>Actor:</strong> {movie.narrator}
            </span>
            <span className="text-lg">
              <strong>Translator:</strong> {movie.transilator}
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
              {movie.buttons[0]}
            </Link>
            <Link
              to={`/download/${movie.id}`}
              className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-500 transition text-white font-semibold rounded-lg shadow-md gap-2 w-full md:w-auto"
            >
              <FaCloudDownloadAlt className="text-xl" />
              {movie.buttons[1]}
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
