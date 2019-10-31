import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import cancelIcon from "../icons/cancel-simple-filled.svg";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { login } = useAuth();

  return (
    <div className="h-full w-full bg-indigo-500 pt-4 px-4">
      <form
        name="login"
        action="#"
        onSubmit={e => {
          e.preventDefault();
          login(username, password, setError);
          return true;
        }}
        className="container mx-auto bg-white shadow-md p-4 rounded shadow"
      >
        <p className="text-2xl font-semibold">Log In</p>
        <div className="mb-2">
          <label htmlFor="form-email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Email
          </label>
          <input
            className="form-input w-full"
            id="form-email"
            type="email"
            name="email"
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
            autocomplete="current-password"
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
        <input type="submit" disabled={!(username && username.length > 0 && password && password.length > 0)} value="Log In" className="btn" />
      </form>
      <p className="text-white mt-2 text-center">
        Do you want to{" "}
        <Link to="/signup" className="underline">
          sign up
        </Link>{" "}
        instead?
      </p>
    </div>
  );
};
