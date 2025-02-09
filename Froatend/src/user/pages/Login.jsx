import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [inputType, setInputType] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = { email, password };
    console.log(values);
  };

  return (
    <div className="h-screen flex items-center bg-black justify-center absolute top-0 left-0 w-full">
      <div className="border md:w-[28em] w-full rounded bg-white flex flex-col p-4">
        <header className="text-xl capitalize mt-3 px-3 text-black">
          Welcome, Login
        </header>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-3">
          <div className="flex flex-col">
            <label className="text-lg text-gray-400">
              Username <sup className="text-red-600">*</sup>
            </label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className="border text-gray-400 rounded-md p-3 w-full outline-none"
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg text-gray-400">
              Password <sup className="text-red-600">*</sup>
            </label>
            <div className="border text-gray-400 rounded-md flex items-center pr-3">
              <input
                type={inputType ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 w-full outline-none"
                placeholder="password"
              />
              <div
                onClick={() => setInputType(!inputType)}
                className="p-3 border rounded-full cursor-pointer"
              >
                {!inputType ? (
                  <FaEye className="text-red-800" />
                ) : (
                  <FaEyeSlash className="text-red-800" />
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <a href="#" className="text-lg underline text-blue-400">
              Forgot Password
            </a>
          </div>
          <div className="flex flex-col">
            <button className="bg-[#1FDF67] text-black p-3 rounded-md hover:bg-opacity-70 transition-all duration-500 hover:text-black">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
