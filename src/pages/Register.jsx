import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Register
        </h1>

        <form className="space-y-5">
          {/* firstname Field */}
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="mb-1 text-gray-700 dark:text-gray-200"
            >
              First Name
            </label>
            <input
              type="firstName"
              id="firstName"
              placeholder="Aditya"
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          {/* lastName Field */}
          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="mb-1 text-gray-700 dark:text-gray-200"
            >
              Last Name
            </label>
            <input
              type="lastName"
              id="lastName"
              placeholder="Kumar"
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          {/* Email Field */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-1 text-gray-700 dark:text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          {/* College Name Field */}
          <div className="flex flex-col">
            <label
              htmlFor="collegeName"
              className="mb-1 text-gray-700 dark:text-gray-200"
            >
              College Name
            </label>
            <input
              type="collegeName"
              id="collegeName"
              placeholder="BIT MESREA"
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          {/* Password Field */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="mb-1 text-gray-700 dark:text-gray-200"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          {/* Confirm Password Field */}
          <div className="flex flex-col">
            <label
              htmlFor="confirmPassword"
              className="mb-1 text-gray-700 dark:text-gray-200"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="••••••••"
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </button>
          {/* Google Log In */}
          <button
            type="button"
            className="w-full bg-white dark:bg-gray-700 text-black dark:text-white py-2 rounded-md border flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
          >
            <span>Log In with Google</span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              height={20}
              width={20}
              alt="Google"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
