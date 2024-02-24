import React, { useState } from "react";
import Logo from "../assets/logo.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "@",
    password: "",
  });

  const [notice, setNotice] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data:", formData);
    setFormData({
      name: "",
      username: "@",
      password: "",
    });
  };

  return (
    <div className="h-full bg-gradient-to-tl from-blue-50 to-blue-700 w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <img
          src={Logo}
          className="h-20 rounded-full border-4 border-orange-200 dark:border-orange-700"
          alt="Logo"
        />
        <p className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          CatCards
        </p>
        <div className="bg-white shadow rounded-3xl lg:w-1/3 md:w-1/2 w-full p-10 mt-6">
          <p
            tabIndex={0}
            role="heading"
            aria-label="Register your account"
            className="text-2xl font-extrabold leading-6 text-gray-800"
          >
            Register your account
          </p>
          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                Name
              </label>
              <input
                aria-label="enter name"
                role="input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                Username
              </label>
              <input
                aria-label="enter your username "
                role="input"
                type="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                required
              />
            </div>

            <div className="relative">
              <label className="text-sm font-medium leading-none text-gray-800">
                Password
              </label>
              <input
                aria-label="enter password"
                name="password"
                placeholder="••••••••"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                required
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
              />

              <button
                type="button"
                className="absolute top-3/4 right-3 transform -translate-y-1/2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400 dark:text-white cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.293 6.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L12 10.586l5.293-5.293a1 1 0 011.414 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400 dark:text-white cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.6 16.6a8 8 0 10-11.2-11.2"
                    />
                  </svg>
                )}
              </button>
            </div>
            {notice && <div className="text-red-500 mt-2">{notice}</div>}
            <div className="mt-6 w-full">
              <button
                role="button"
                aria-label="create my account"
                type="submit"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
