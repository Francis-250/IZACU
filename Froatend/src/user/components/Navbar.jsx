import { FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex md:flex-row flex-col gap-3 md:gap-0 border-b border-gray-600 justify-between items-center p-4">
      <div className="flex items-center">
        <header className="text-2xl text-white font-bold">Izacu</header>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-gray-600 rounded-full overflow-hidden bg-gray-800">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent p-2 pl-4 md:w-[20em] outline-none text-white placeholder-gray-400 flex-1"
          />
          <button className="bg-[#1FDF67] p-3 md:px-5 hover:bg-[#1ED760] transition-colors">
            <FaSearch className="text-white text-xl" />
          </button>
        </div>
        <Link to="/login" className="flex items-center gap-2">
          <button className="bg-[#1FDF67] rounded-full p-2 hover:bg-[#1ED760] transition-colors">
            <FaUser className="text-white text-xl" />
          </button>
          <span className="text-lg text-gray-400 hover:text-white cursor-pointer">
            Login
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
