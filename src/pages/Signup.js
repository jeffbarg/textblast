import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import cancelIcon from "../icons/cancel-simple-filled.svg";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { signup } = useAuth();

  return (
    <div className="w-full h-full px-4 pt-4 bg-indigo-500">
      <form
        name="signup"
        action="#"
        onSubmit={e => {
          e.preventDefault();
          signup(username, password, e => setError(e));
          return true;
        }}
        className="container p-4 mx-auto bg-white rounded shadow shadow-md"
      >
        <p className="text-2xl font-semibold">Sign Up</p>
        <div className="mb-2">
          <label htmlFor="form-email" className="block mb-1 text-xs font-bold tracking-wide text-gray-700 uppercase">
            Email
          </label>
          <input
            className="w-full form-input"
            id="form-email"
            name="email"
            type="email"
            autoComplete="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Email address"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="form-password" className="block mb-1 text-xs font-bold tracking-wide text-gray-700 uppercase">
            Password
          </label>
          <input
            className="w-full form-input"
            id="form-password"
            type="password"
            name="password"
            autocComplete="new-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="****************"
            required
          />
        </div>
        {error && (
          <div className="flex items-center justify-between px-4 py-3 mb-2 text-white bg-red-400 border border-red-600 rounded text-semibold">
            <span>{error.message}</span>
            <button className="focus:outline-none" onClick={() => setError(null)}>
              <img alt="Cancel" className="w-4 h-4" src={cancelIcon} />
            </button>
          </div>
        )}
        <input type="submit" disabled={!(username && username.length > 0 && password && password.length > 0)} value="Sign Up" className="btn" />
      </form>
      <p className="mt-2 text-center text-white">
        Do you want to{" "}
        <Link to="/login" className="underline">
          sign in
        </Link>{" "}
        instead?
      </p>
    </div>
  );
};
