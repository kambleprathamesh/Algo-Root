import { Link } from "react-router-dom";
import React from "react";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#e8e0ff] text-black text-center p-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 text-black">Oops! The page you are looking for does not exist.</p>
      <Link
        to="/tasks"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
