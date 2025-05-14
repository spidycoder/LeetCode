import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Log In
        </h1>
        <form className="space-y-5">
          {/* Email Field */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-1 text-gray-700 dark:text-gray-200"
            >
              Email
            </label>
            <input
              onClick={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="you@example.com"
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
              onClick={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="••••••••"
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Log In Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Log In
          </button>

          {/* Register Link */}
          <div className="text-center text-gray-700 dark:text-white">
            New User?{" "}
            <Link to="/register" className="text-red-500 hover:underline">
              Register Now
            </Link>
          </div>

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
