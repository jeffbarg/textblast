import React, { useState, useEffect } from "react";
import axios from "axios";
import cancelIcon from "../icons/cancel-simple-filled.svg";
import ClipLoader from "react-spinners/ClipLoader";

export default ({ people }) => {
  // Error Handling State
  const [errors, setErrors] = useState([]);
  let [message, setMessage] = useState("");
  let [sendMessageLoading, setSendMessageLoading] = useState(false);
  let [sentMessages, setSentMessages] = useState([]);

  let addError = error => {
    setErrors([...errors, error]);
  };
  let cancelError = i => {
    setErrors(errors.filter((error, index) => index !== i));
  };

  // Message Proxying Handler
  let sendMessage = message => {
    return Promise.all(
      people.map(person => {
        if (person.item.checked) {
          return axios
            .post("/.netlify/functions/send-text", {
              number: person.item.number,
              message
            })
            .then(function(response) {
              console.log(response);
              if (response.data && response.data.ok) {
                setSentMessages([...sentMessages, { number: person.item.number, message }]);
              } else {
                addError({ ...response.data, name: person.item.name });
              }
            })
            .catch(function(error) {
              addError(error);
            });
        } else {
          return Promise.resolve();
        }
      })
    );
  };

  return (
    <div>
      <label className="block">
        <span className="text-gray-700">Message</span>
        <textarea
          className="form-textarea mt-1 mb-2 block w-full"
          value={message}
          onChange={e => setMessage(e.target.value)}
          rows="3"
          placeholder="Enter the message that will be sent out to the selected recipients here."
        ></textarea>
      </label>
      <>
        {errors &&
          errors.map((error, i) => (
            <div
              key={error.message}
              className="mb-2 py-3 px-4 bg-red-400 text-white text-semibold rounded border border-red-600 flex items-center justify-between"
            >
              <span>
                {error.name ? <div className="font-bold">{error.name}: </div> : null}
                {error.message}
              </span>
              <button className="focus:outline-none" onClick={() => cancelError(i)}>
                <img className="h-4 w-4" src={cancelIcon} />
              </button>
            </div>
          ))}
      </>
      <button
        className="btn"
        onClick={() => {
          setSendMessageLoading(true);
          sendMessage(message).then(() => {
            setSendMessageLoading(false);
          });
          setMessage("");
        }}
      >
        {sendMessageLoading ? <ClipLoader color="white" size="18" /> : "Send Message"}
      </button>
    </div>
  );
};
