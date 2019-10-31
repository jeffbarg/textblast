import React, { useState } from "react";
import cancelIcon from "../icons/cancel-simple-filled.svg";
import PhoneInput from "react-phone-input-2";
import userbase from "userbase-js";

const PEOPLE_DATABASE_NAME = "people";

export default ({ setPeople }) => {
  let [name, setName] = useState("");
  let [number, setNumber] = useState("");
  const [error, setError] = useState(null);

  let addPerson = (name, number) => {
    if (!name || name.length === 0) {
      setError({ message: "You need to enter a name" });
      return;
    }
    if (!number || number.length === 0) {
      setError({ message: "You need to enter a number" });
      return;
    }
    userbase
      .insert(PEOPLE_DATABASE_NAME, { name, number })
      .then(() => {
        setNumber("");
        setName("");
      })
      .catch(setError);
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addPerson(name, number);
      }}
      className="py-2 mb-1"
    >
      <div className="sm:flex sm:mb-2">
        <label className="block w-full sm:w-1/2 mb-1 sm:mb-0 sm:mr-2">
          <span className="text-gray-700 text-sm uppercase font-bold mb-1">Name</span>
          <input
            className="text-black w-full form-input"
            id="form-name"
            name="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
          />
        </label>
        <label className="block w-full sm:w-1/2">
          <span className="text-gray-700 text-sm uppercase font-bold mb-1">Phone #</span>
          <PhoneInput disableCountryCode defaultCountry={"us"} onlyCountries={["us"]} value={number} onChange={setNumber} placeholder="Phone Number" />
        </label>
      </div>
      {error && (
        <div className="mb-2 py-3 px-4 bg-red-400 text-white text-semibold  rounded border border-red-600 flex items-center justify-between">
          <span>{error.message}</span>
          <button className="focus:outline-none" onClick={() => setError(null)}>
            <img alt="Cancel" className="h-4 w-4" src={cancelIcon} />
          </button>
        </div>
      )}
      <input type="submit" value="Add Person" className="btn" />
    </form>
  );
};
