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
    <div className="h-full w-full bg-indigo-500 pt-4 px-4">
      <form
        name="signup"
        action="#"
        onSubmit={e => {
          e.preventDefault();
          signup(username, password, e => setError(e));
          return true;
        }}
        className="container mx-auto bg-white shadow-md p-4 rounded shadow"
      >
        <p className="text-2xl font-semibold">Sign Up</p>
        <div className="mb-2">
          <label htmlFor="form-email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Email
          </label>
          <input
            className="form-input w-full"
            id="form-email"
            name="email"
            type="email"
            autocomplete="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Email address"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="form-password" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Password
          </label>
          <input
            className="form-input w-full"
            id="form-password"
            type="password"
            name="password"
            autocomplete="new-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="****************"
            required
          />
        </div>
        {error && (
          <div className="py-3 px-4 bg-red-400 text-white text-semibold mb-2 rounded border border-red-600 flex items-center justify-between">
            <span>{error.message}</span>
            <button className="focus:outline-none" onClick={() => setError(null)}>
              <img alt="Cancel" className="h-4 w-4" src={cancelIcon} />
            </button>
          </div>
        )}
        <input type="submit" disabled={!(username && username.length > 0 && password && password.length > 0)} value="Sign Up" className="btn" />
      </form>
      <p className="text-white mt-2 text-center">
        Do you want to{" "}
        <Link to="/login" className="underline">
          sign in
        </Link>{" "}
        instead?
      </p>
    </div>
  );
};
