import React, { useState, useEffect } from "react";
import userbase from "userbase-js";
import PeopleList from "./PeopleList";
import AddPersonForm from "./AddPersonForm";
import SendMessageForm from "./SendMessageForm";

const PEOPLE_DATABASE_NAME = "people";

export default () => {
  let [people, setPeople] = useState(null);
  let [error, setError] = useState(null);

  let handleDatabaseChange = items => {
    setPeople(items);
  };
  useEffect(() => {
    userbase.openDatabase(PEOPLE_DATABASE_NAME, handleDatabaseChange).catch(e => setError(e));
  }, []);

  return (
    <div className="mb-2 w-full flex flex-col">
      {error && <div className="mb-2 bg-red-500 shadow rounded text-white w-full p-3 text-lg">{error.message}</div>}

      {/* Add Person Form */}
      <h1 className="mb-2 w-full bg-blue-400 border border-blue-800 text-white rounded shadow-md py-3 px-4">
        <span className="font-bold">1.</span> Add People
      </h1>
      <div className="w-full bg-gray-100 rounded shadow-md p-3 mb-4">
        <AddPersonForm setPeople={setPeople} />
      </div>

      {/* People List */}
      <h1 className="mb-2 w-full bg-blue-400 border border-blue-800 text-white rounded shadow-md py-3 px-4">
        <span className="font-bold">2.</span> Select Recipients
      </h1>
      <div className="w-full bg-gray-100 rounded shadow-md p-3 mb-4">
        <PeopleList people={people} setPeople={setPeople} />
      </div>

      {/* Send Message */}
      <h1 className="mb-2 w-full bg-blue-400 border border-blue-800 text-white rounded shadow-md py-3 px-4">
        <span className="font-bold">3.</span> Send Message
      </h1>
      <div className="w-full bg-gray-100 rounded shadow-md p-3 mb-4">
        <SendMessageForm people={people} />
      </div>
    </div>
  );
};
