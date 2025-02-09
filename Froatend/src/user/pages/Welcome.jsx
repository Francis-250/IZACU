import { asset } from "../../assets/assets";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Welcome = () => {
  return (
    <div
      style={{ backgroundImage: `url(${asset.wallpaper1})` }}
      className="h-screen flex justify-center relative items-center bg-cover bg-center w-full md:px-4 px-2"
    >
      <div className="absolute w-full h-screen bg-black bg-opacity-80 mix-blend-overlay pointer-events-none"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div className="w-full p-4 flex flex-col justify-center items-center">
          <header className="text-4xl font-bold flex gap-1">
            <p>IZACU</p>
            <p className="text-[#1FDF67]">MOVIE</p>
          </header>
          <p className="text-lg mt-2">Watch Content Every Where</p>
        </div>
        <div className="w-full md:w-[30em] p-4 rounded bg-black bg-opacity-40 flex flex-col justify-center">
          <header className="text-xl flex gap-2">
            <p>Choose Language</p>
            <p>/</p>
            <p>Hitamo Ururimi</p>
          </header>
          <div className="flex flex-col gap-4 mt-5">
            <Link className="flex items-center gap-2 border-gray-500 bg-gray-500 border focus:border-none focus:bg-[#077c34] bg-opacity-60 focus:bg-opacity-70 p-1 rounded">
              <img src={asset.rw} className="h-10" />
              <span className="text-lg capitalize">kinyarwanda</span>
            </Link>
            <Link className="flex items-center gap-2 border-gray-500 bg-gray-500 border focus:border-none p-1 focus:bg-[#077c34] bg-opacity-60 focus:bg-opacity-70 rounded">
              <img src={asset.ug} className="h-10" />
              <span className="text-lg capitalize">Luganda</span>
            </Link>
            <Link
              to="/admin"
              className="flex bg-[#1FDF67] text-black items-center justify-center gap-2 p-3 rounded"
            >
              Continue
            </Link>
            <a
              href="#"
              className="w-[4em] bg-[#077c34] fixed bottom-5 right-5 h-[4em] rounded-full flex items-center justify-center"
            >
              <FaWhatsapp className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
