import React from "react";
import { Link } from "react-router-dom";
import textblast from "./textblast.png";

export default () => {
  return (
    <div className="flex flex-wrap items-center justify-center max-h-full">
      <div className="text-white p-4">
        <h1 className="text-5xl font-bold">Text Blast</h1>
        <h2 className="text-3xl mb-4">Send out text updates!</h2>
        <p></p>
        <div className="w-full mb-4">
          <Link to="/signup" className="border border-white px-4 font-bold py-3">
            Sign Up
          </Link>
          <Link to="/login" className="border border-white px-4 font-bold py-3 ml-2">
            Log In
          </Link>
        </div>
        <small className="w-full">
          Made with ♥️ by{" "}
          <a href="https://jeffbarg.com/" className="font-semibold hover:underline">
            Jeff Barg
          </a>
        </small>
      </div>
      <img src={textblast} alt="Screenshot" />
    </div>
  );
};
