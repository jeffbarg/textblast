import React, { useState } from "react";
import { useUser } from "../context/user-context";
import { useAuth } from "../context/auth-context";
import cancelIcon from "../icons/cancel-simple-filled.svg";

export default () => {
  let { setProfileAttribute } = useAuth();
  let { profile } = useUser();

  let [key, setKey] = useState("");
  let [value, setValue] = useState("");
  const [error, setError] = useState(null);

  return (
    <div className="w-full bg-gray-100 rounded shadow-md text-white p-6 flex flex-col">
      <div className="mb-2 w-full bg-teal-500 rounded shadow py-3 px-4">{JSON.stringify(profile.item)}</div>
      <input
        className="mb-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="form-password"
        type="text"
        value={key}
        onChange={e => setKey(e.target.value)}
        placeholder="Key"
      />
      <input
        className="mb-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="form-password"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Value"
      />
      {error && (
        <div className="py-3 px-4 bg-red-400 text-white text-semibold mb-2 rounded border border-red-600 flex items-center justify-between">
          <span>{error.message}</span>
          <button className="focus:outline-none" onClick={() => setError(null)}>
            <img className="h-4 w-4" src={cancelIcon} />
          </button>
        </div>
      )}
      <input
        type="submit"
        onClick={() => {
          setProfileAttribute(key, value, setError);
        }}
        value="Set Attribute"
        className="btn"
      />
    </div>
  );
};
