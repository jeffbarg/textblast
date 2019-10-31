import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-indigo-500">
      <ClipLoader color="white" size={55} />
    </div>
  );
};
