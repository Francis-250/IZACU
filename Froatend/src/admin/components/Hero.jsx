import { homeContents } from "../../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col md:p-4 p-1">
      {homeContents.slice(6, 7).map((item, index) => (
        <div key={index} className="flex flex-col mb-2">
          <p className="text-2xl font-bold">{item.title}</p>
          <p className="text-lg mt-2">{item.subtitle}</p>
        </div>
      ))}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {homeContents.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="shadow-md bg-white rounded p-2 flex flex-col items-center justify-center"
          >
            <header className="text-xl text-gray-900">{item.title}</header>
            <div className="mt-3 h-[50px] w-[50px] rounded-full bg-gray-900 flex items-center justify-center">
              {item.value}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="">
          {homeContents.slice(5, 6).map((item, index) => (
            <div
              key={index}
              className="shadow-md bg-white rounded flex flex-col p-4 text-gray-900"
            >
              <header className="text-xl">{item.title}</header>
              <hr className="mt-2" />
              <div className="mt-2 flex flex-col gap-3">
                {item.movies?.map((movie, index) => (
                  <span
                    key={index}
                    className="p-[10px] border cursor-pointer rounded"
                  >
                    {movie.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="">
          {homeContents.slice(4, 5).map((item, index) => (
            <div
              key={index}
              className="shadow-md bg-white rounded flex flex-col p-4 text-gray-900"
            >
              <header className="text-xl">{item.title}</header>
              <hr className="mt-2" />
              <div className="mt-2 flex flex-col gap-3">
                {item.actions?.map((action, index) => (
                  <Link
                    to={action.link}
                    key={index}
                    className="p-[10px] border cursor-pointer rounded"
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
