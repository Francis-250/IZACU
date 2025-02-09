import { useState } from "react";
import { AdminMenu } from "../../assets/assets";
import { FaUser, FaTimes } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="flex gap-3 md:gap-0 border-b border-gray-600 justify-between items-center md:p-4 md:py-3 p-3">
      <div className="flex items-center">
        <header className="text-2xl text-white font-bold">Izacu</header>
      </div>
      <div className="md:flex hidden gap-6 capitalize">
        {AdminMenu.map((item, index) => (
          <Link
            to={item.link}
            className="hover:bg-gray-400 p-2 rounded transition-all duration-500"
            key={index}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="md:flex hidden items-center gap-4">
        <Link to="/login" className="flex items-center gap-2">
          <button className="bg-[#1FDF67] rounded-full p-2 hover:bg-[#1ED760] transition-colors">
            <FaUser className="text-white text-xl" />
          </button>
          <span className="text-lg text-gray-400 hover:text-white cursor-pointer">
            Logout
          </span>
        </Link>
      </div>
      <div
        onClick={() => setIsMobile(!isMobile)}
        className="flex md:hidden items-center justify-center p-3 border rounded-full cursor-pointer text-2xl"
      >
        {!isMobile ? <HiMenuAlt3 /> : <FaTimes />}
      </div>
      {isMobile && (
        <div className="absolute top-[5em] border-l right-0 bg-gray-900 h-[90vh] w-[14em] flex items-center justify-center">
          <div className="md:hidden flex flex-col gap-6 capitalize">
            {AdminMenu.map((item, index) => (
              <Link
                to={item.link}
                className="hover:bg-gray-400 p-2 rounded transition-all duration-500"
                key={index}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
