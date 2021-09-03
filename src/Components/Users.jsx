import React, { useState } from "react";
import Table from "./Table";
let renderArr = [];
const Users = ({ data }) => {
  let [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const handleInput = (e) => {
    if(e.target.value.trim()===''){
      renderArr=data;
    }
    setInput(e.target.value.toLowerCase());
    if (e.key === "Enter") {
      alert("Entered");
    }
    searchName(e.target.value.toLowerCase());
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchName(input);
    }
  };
  const searchName = (value) => {
    const filterArr = [];
    data.forEach((el) => {
      if (el.first_name.toLowerCase().includes(value) || el.last_name.toLowerCase().includes(value)) {
        filterArr.push(el);
      }
    });
    setOutput(filterArr);
  };

  renderArr = output.length > 0 ? output : data;

  return (
    <div className="container-fluid">
      <div className="row">
        <h3 className="mt-3">Users</h3>
        <div>
          <input
            type="text"
            placeholder="Search Names here..."
            onChange={handleInput}
            value={input}
            onKeyPress={handleKeyPress}
          />
          <button>
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
