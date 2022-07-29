import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {

  const [state, setState] = useState({
    name: "",
    surname: "",
  });

  const [list, setlist] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(state.name === " " || state.surname === " "){
      return alert("Please enter valid name and surname!");
    }

    state.id = uuidv4();
    setlist([...list, state]);
    setState({
      name:" ",
      surname:" "
    });
  };

  const handleChange = (e) => {
    setState({
    ...state, [e.target.name]: e.target.value,
    });
  };
  
  const handleDelete = (id) => {
    let newlist = list.filter((item) => item.id !== id);
    setlist([...newlist]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={state.name}
          onChange={(e) => handleChange(e)}
        /><br />
        <br />
        <label>Surname: </label>
        <input
          type="text"
          placeholder="Enter Surname"
          name="surname"
          value={state.surname}
          onChange={(e) => handleChange(e)}
        /><br />
        <br /><button>Submit</button>
      </form><br />

      <br /><div className="display">
      <table>
        <thead>
          <tr>
            <th>Name: </th>
            <th>Surname: </th>
            <th>Action: </th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.surname}</td>
                  <td>
                    <button onClick={()=>handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
