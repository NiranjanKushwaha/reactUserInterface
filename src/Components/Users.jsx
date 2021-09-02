import React, { useState } from "react";
import Table from "./Table";
let renderArr = [];
const Users = ({ data }) => {
  let [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value.toLowerCase());
    searchName(e);
    if (e.key === "Enter") {
      alert("Entered");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchName(event);
    }
  };
  const searchName = (e) => {
    e.preventDefault();
    console.log(input);
    const filterArr = [];
    data.forEach((el) => {
      if (el.first_name.toLowerCase().includes(input) || el.last_name.toLowerCase().includes(input)) {
        filterArr.push(el);
      }
    });
    setOutput(filterArr);
  };

  renderArr = output.length > 0 ? output : data;

  return (
    <div className="container-fluid">
      <div className="row">
        <h3 className="m-3">Users</h3>
        <div>
          <input
            type="text"
            placeholder="Search Names here..."
            onChange={handleInput}
            value={input}
            onKeyPress={handleKeyPress}
          />
          <button onClick={searchName}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="row">
        <Table data={renderArr} />
      </div>
    </div>
  );
};

export default Users;
