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
    userbase.openDatabase({ databaseName: PEOPLE_DATABASE_NAME, changeHandler: handleDatabaseChange }).catch(e => setError(e));
  }, []);

  return (
    <div className="flex flex-col w-full mb-2">
      {error && <div className="w-full p-3 mb-2 text-lg text-white bg-red-500 rounded shadow">{error.message}</div>}

      {/* Add Person Form */}
      <h1 className="w-full px-4 py-3 mb-2 text-white bg-blue-400 border border-blue-800 rounded shadow-md">
        <span className="font-bold">1.</span> Add People
      </h1>
      <div className="w-full p-3 mb-4 bg-gray-100 rounded shadow-md">
        <AddPersonForm setPeople={setPeople} />
      </div>

      {/* People List */}
      <h1 className="w-full px-4 py-3 mb-2 text-white bg-blue-400 border border-blue-800 rounded shadow-md">
        <span className="font-bold">2.</span> Select Recipients
      </h1>
      <div className="w-full p-3 mb-4 bg-gray-100 rounded shadow-md">
        <PeopleList people={people} setPeople={setPeople} />
      </div>

      {/* Send Message */}
      <h1 className="w-full px-4 py-3 mb-2 text-white bg-blue-400 border border-blue-800 rounded shadow-md">
        <span className="font-bold">3.</span> Send Message
      </h1>
      <div className="w-full p-3 mb-4 bg-gray-100 rounded shadow-md">
        <SendMessageForm people={people} />
      </div>
    </div>
  );
};
