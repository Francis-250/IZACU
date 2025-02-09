import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { BsFileMinus, BsPlus } from "react-icons/bs";
import {
  country as countries,
  genre,
  narrators,
  tableHeader,
} from "../../assets/assets";
import axios from "axios";
import { FaPen, FaSearch, FaTrash } from "react-icons/fa";
import Loading from "../../user/components/Loading";

const MovieDetail = () => {
  const [current, setCurrent] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [driveUrl, setDriveUrl] = useState("");
  const [duration, setDuration] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [category, setCategory] = useState("");
  const [translator, setTranslator] = useState("");
  const [status, setStatus] = useState("Active");
  const [releaseDate, setReleaseDate] = useState("");
  const [description, setDescription] = useState("");

  const values = {
    title,
    driveUrl,
    duration,
    thumbnailUrl,
    category,
    translator,
    country,
    status,
    releaseDate,
    description,
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(values);
    if (!driveUrl) {
      alert("Google Drive URL is required.");
    }
    axios
      .post("http://localhost:3000/movie", values)
      .then((res) => {
        console.log("Movie added successfully", res.data);
        setTitle("");
        setCategory("");
        setCountry("");
        setDescription("");
        setDriveUrl("");
        setStatus("Active");
        setReleaseDate("");
        setTranslator("");
        setDuration("");
        setMessage("Movie added successfully");
      })
      .catch((err) => {
        console.error("Error adding movie:", err);
      });
  };

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
      <Navbar />
      <div className="md:p-4 p-1">
        <div className="p-4 text-gray-900 shadow-md bg-white rounded-lg flex items-center justify-between">
          <header className="text-xl capitalize font-medium">
            Movie Management
          </header>
          <div
            onClick={() => setCurrent(!current)}
            className="h-12 w-12 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition duration-300 cursor-pointer"
          >
            {!current ? <BsPlus size={30} /> : <BsFileMinus />}
          </div>
        </div>

        {/* View */}
        {!current ? (
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-gray-900 text-sm text-left border border-gray-200 shadow-lg rounded-lg">
              <thead className="bg-gray-100 text-gray-700 uppercase">
                <tr className="border-b border-gray-300">
                  <td colSpan="100%" className="p-2">
                    <div className="flex items-center border focus-within:border-gray-300 rounded overflow-hidden bg-gray-50  border-gray-500 transition-colors w-full md:flex-1 max-full">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent p-2 pl-4 md:p-3 md:pl-5 outline-none text-gray-800 placeholder-gray-500 flex-1 text-sm md:text-base"
                      />
                      <button className="bg-[#1FDF67] p-3 md:p-4 hover:bg-[#1ED760] transition-colors">
                        <FaSearch className="text-white text-lg md:text-xl" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  {tableHeader.map((header) => (
                    <th
                      key={header}
                      className="px-6 py-3 font-semibold text-sm truncate max-w-xs"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((m) => (
                  <tr key={m.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-3 font-medium text-gray-900  truncate max-w-xs">
                      {m.title}
                    </td>
                    <td className="px-6 py-3 flex items-center gap-4">
                      <span
                        className={
                          m.drive_url ? "text-red-600" : "text-green-600"
                        }
                      >
                        {m.drive_url ? "0" : "1"}
                      </span>
                      <span>|</span>
                      <span
                        className={
                          m.status === "Active"
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {m.status === "Active" ? "1" : "0"}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-gray-700">{m.duration}</td>
                    <td className="px-6 py-3 text-gray-700">
                      <span
                        className={
                          m.thumbnailUrl ? "text-red-600" : "text-green-600"
                        }
                      >
                        {m.thumbnailUrl ? "Not Exist" : "Exist"}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-gray-700">{m.category}</td>
                    <td className="px-6 py-3 capitalize text-gray-700">
                      {m.translator}
                    </td>
                    <td className="px-6 py-3 text-gray-700">{m.country}</td>
                    <td className="px-6 py-3  truncate max-w-xs">
                      {m.release_date}
                    </td>
                    <td className="px-6 py-3 text-gray-700 truncate max-w-xs">
                      {m.description}
                    </td>
                    <td className="px-6 py-3 flex items-center gap-2 justify-center">
                      <button className="text-red-500 hover:text-red-700 transition p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                        <FaTrash />
                      </button>
                      <button className="text-blue-500 hover:text-blue-700 transition p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                        <FaPen />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <form
            onSubmit={handleForm}
            className="mt-6 bg-white p-4 md:p-6 grid gap-6 shadow-md rounded-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <label className="text-gray-800 font-semibold">Title</label>
                <input
                  type="text"
                  placeholder="Enter Movie Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-2 p-3 border border-gray-300 rounded-md text-gray-900 outline-none w-full"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-800 font-semibold">
                  Google Drive URL
                </label>
                <input
                  type="url"
                  placeholder="Enter Google Drive Movie URL"
                  value={driveUrl}
                  onChange={(e) => setDriveUrl(e.target.value)}
                  className="mt-2 p-3 border border-gray-300 rounded-md text-gray-900 outline-none w-full"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-800 font-semibold">
                  Thumbnail URL
                </label>
                <input
                  type="url"
                  placeholder="Enter Google Drive Thumbnail URL"
                  value={thumbnailUrl}
                  onChange={(e) => setThumbnailUrl(e.target.value)}
                  className="mt-2 p-3 border border-gray-300 rounded-md text-gray-900 outline-none w-full"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-800 font-semibold">Duration</label>
                <input
                  type="text"
                  placeholder="Enter Movie Duration (min)"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="mt-2 p-3 border border-gray-300 rounded-md text-gray-900 outline-none w-full"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-800 font-semibold">Category</label>
                <select
                  className="mt-2 p-3 border border-gray-300 rounded-md text-gray-900 outline-none w-full"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {genre.map((g, index) => (
                    <option key={index} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-gray-800 font-semibold">
                  Translators
                </label>
                <select
                  className="mt-2 p-3 border border-gray-300 rounded-md text-gray-900 outline-none w-full"
                  value={translator}
                  onChange={(e) => setTranslator(e.target.value)}
                >
                  <option value="">Select Translator</option>
                  {narrators.map((n, index) => (
                    <option key={index} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-gray-800 font-semibold">Country</label>
                <select
                  className="mt-2 p-3 border border-gray-300 rounded-md text-gray-900 outline-none w-full"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">Select Country</option>
                  {countries.map((c, index) => (
                    <option key={index} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-gray-800 font-semibold">Status</label>
                <select
                  className="mt-2 p-3 border border-gray-300 rounded-md text-gray-900 outline-none w-full"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-gray-800 font-semibold">
                  Release Date
                </label>
                <input
                  type="date"
                  value={releaseDate}
                  onChange={(e) => setReleaseDate(e.target.value)}
                  className="mt-2 p-3 border border-gray-300 rounded-md text-gray-900 outline-none w-full"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-800 font-semibold">Description</label>
              <textarea
                className="mt-2 h-32 p-3 border border-gray-300 rounded-md text-gray-900 outline-none resize-none w-full"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="mt-4 p-3 bg-black text-white font-bold rounded-md w-full hover:bg-gray-900 transition"
              >
                Publish
              </button>
            </div>
          </form>
        )}
        {message && (
          <div className="absolute p-3 flex items-center justify-center text-xl bg-red-600 rounded w-[40%] left-[30%] top-[4.5em]">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
