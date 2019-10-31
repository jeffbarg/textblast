import React from "react";
import TextBlastSection from "../components/TextBlastSection";

export default () => {
  return (
    <div className="bg-indigo-500 p-4">
      <div className="container mx-auto">
        <TextBlastSection />
        <small className="w-full text-center text-white mt-2 block">
          Made with ♥️ by{" "}
          <a href="https://jeffbarg.com/" className="font-semibold hover:underline">
            Jeff Barg
          </a>
        </small>
      </div>
    </div>
  );
};
