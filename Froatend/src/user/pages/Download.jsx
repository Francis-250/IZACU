import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { heroContent } from "../../assets/assets";
import { FaArrowLeft, FaCloudDownloadAlt } from "react-icons/fa";

const Download = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const movie = heroContent.find((m) => m.id === parseInt(id, 10));

  const [selectedSeason, setSelectedSeason] = useState(1);
  const [selectedEpisode, setSelectedEpisode] = useState(1);

  if (!movie) {
    return <div className="text-center text-white text-xl">No Movie Found</div>;
  } 

  const url =
    "https://drive.google.com/file/d/1xfHJoLjabqIcoTwE7YxNGzvXxDtm89fn/view?usp=sharing";

  return (
    <div className="relative p-4 flex flex-col text-white min-h-screen">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-[calc(300% + 1.3px)] h-[307px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-[#1F2937]"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-[#374151]"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-[#4B5563]"
          ></path>
        </svg>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${movie.thumbnail})` }}
      ></div>
      <div className="flex items-center justify-between relative z-10">
        <button
          onClick={() => navigate(-1)}
          className="p-2 flex items-center justify-center rounded-full border border-gray-500 hover:bg-gray-700 transition"
          aria-label="Go back"
        >
          <FaArrowLeft className="text-2xl" />
        </button>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow mt-20">
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        <p className="text-lg text-gray-300 mb-8">{movie.description}</p>

        <div className="flex gap-4 mb-6">
          <select
            className="px-4 py-2 outline-none bg-gray-700 text-white rounded-lg"
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(Number(e.target.value))}
          >
            {[...Array(movie.seasons || 3)].map((_, i) => (
              <option key={i} value={i + 1}>
                Season {i + 1}
              </option>
            ))}
          </select>

          <select
            className="px-4 py-2 outline-none bg-gray-700 text-white rounded-lg"
            value={selectedEpisode}
            onChange={(e) => setSelectedEpisode(Number(e.target.value))}
          >
            {[...Array(movie.episodesPerSeason || 10)].map((_, i) => (
              <option key={i} value={i + 1}>
                Episode {i + 1}
              </option>
            ))}
          </select>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <FaCloudDownloadAlt className="mr-2" />
          Download Now
        </a>
      </div>
    </div>
  );
};

export default Download;
