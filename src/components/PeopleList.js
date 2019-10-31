import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default ({ people, setPeople }) => {
  return (
    <div>
      {people === null ? (
        <div>
          <ClipLoader color="white" />
        </div>
      ) : (
        <>
          {people.length === 0 ? (
            <div className="w-full p-4">
              <div className="text-gray-400 text-center p-4 text-4xl">No People Added Yet</div>
              <div className="text-gray-400 text-center text-6xl">😢</div>
            </div>
          ) : (
            <div className="mt-2">
              <table className="table table-hover text-black">
                <thead className="bg-white">
                  <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Selected</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {people.map((person, i) => (
                    <tr
                      onClick={e => {
                        // Toggle the checkmark when the user clicks the row
                        let checked = !person.item.checked;
                        let newPeople = [...people];
                        newPeople[i].item.checked = checked;
                        setPeople(newPeople);
                      }}
                      key={person.itemId}
                      className="w-1/4 mx-4 p-4"
                    >
                      <td className="font-bold">{person.item.name}</td>
                      <td className="">{person.item.number}</td>
                      <td className="">
                        <input
                          type="checkbox"
                          className=""
                          checked={person.item.checked}
                          onChange={e => {
                            let checked = e.target.checked;
                            let newPeople = [...people];
                            newPeople[i].item.checked = checked;
                            setPeople(newPeople);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};
