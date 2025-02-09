import { useNavigate, useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaCloudDownloadAlt,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";
import Loading from "../../user/components/Loading";
import { useEffect, useState } from "react";
import axios from "axios";

const WatchMovie = () => {
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
  const suggestions = data.filter((m) => m.id !== parseInt(id, 10));

  if (isLoading) {
    return <Loading />;
  }

  const googleDriveVideoUrl = `https://drive.google.com/uc?id=${movie.videoUrl}`;

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
      </div>
      <div className="flex flex-col lg:flex-row gap-8 mt-3">
        <div className="w-full lg:w-3/4">
          <div className="bg-black rounded-lg overflow-hidden shadow-lg">
            <video
              src={googleDriveVideoUrl}
              controls
              type="video/mp4"
              className="w-full h-full"
            />
          </div>
        </div>
        {/* suggestions */}
        <div className="w-full lg:w-1/4">
          <h2 className="text-xl font-bold mb-4">You Might Also Like</h2>
          <div className="space-y-4">
            {suggestions.map((suggestion) => (
              <Link
                key={suggestion.id}
                to={`/watch/${suggestion.id}`}
                className="block group"
              >
                <div className="flex items-center space-x-4">
                  {/* <img
                    src={suggestion.thumbnail}
                    alt={suggestion.title}
                    className="w-20 h-12 object-cover rounded-lg"
                  /> */}
                  <div className="w-20 h-12 object-cover rounded-lg bg-black">
                    d
                  </div>
                  <div>
                    <p className="text-sm font-semibold group-hover:text-red-600 transition duration-300">
                      {suggestion.title}
                    </p>
                    <p className="text-xs text-gray-400">
                      {suggestion.transilator}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Download */}
      <div className="flex flex-col md:flex-row md:justify-between gap-4 mt-4 w-3/4">
        <Link className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-500 transition text-white font-semibold rounded-lg shadow-md gap-2 w-full md:w-auto">
          <FaCloudDownloadAlt className="text-xl" />
          Download
        </Link>
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
  );
};

export default WatchMovie;
