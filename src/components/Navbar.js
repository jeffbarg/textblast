import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export default () => {
  let AuthSection = () => {
    let { logout, isAuthenticated } = useAuth();

    if (isAuthenticated) {
      return (
        <>
          <Link to="/profile" className="py-2 px-4 hover:text-gray-300">
            Profile
          </Link>
          <button className="border border-white py-2 px-4 font-bold" onClick={logout}>
            Logout
          </button>
        </>
      );
    } else {
      return (
        <Link to="/login" className="border border-white py-2 px-4 font-bold">
          Login
        </Link>
      );
    }
  };

  return (
    <div className="w-full bg-indigo-700 border-b border-indigo-800 shadow-md text-white p-6 flex items-center justify-between">
      <div className="font-bold">
        <a href="/">TextBlast</a>
      </div>
      <div className="">
        <AuthSection />
      </div>
    </div>
  );
};
