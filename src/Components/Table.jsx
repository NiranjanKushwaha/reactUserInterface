import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
const Table = ({ data}) => {
  let pageSize = 50;
  console.log('data received in table: '+data.length);
  let totalPages = Math.ceil(data.length / pageSize);
  let [startIndex,setStartIndex]=useState(0);
  let [endIndex,setEndIndex]=useState(Math.ceil(data.length/totalPages)-1);
  const [currentPage, setCurrentPage] = useState(1);
  
  let pagesList = [];
  const sortTable = (columnName) => {
    if (columnName === "first_name") {
      data.sort((a, b) =>
        a.first_name > b.first_name ? 1 : b.first_name > a.first_name ? -1 : 0
      );
    }
  };
  for (let i = 1; i <= totalPages; i++) {
    pagesList.push(i);
  }
  const ChangePage=(page)=>{
    setStartIndex((page-1)*pageSize);
    setEndIndex((page-1)*pageSize+pageSize);
    setCurrentPage(page);
    // data.slice(startIndex, endIndex)
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr className="heading">
            <td>Index</td>
            <th scope="col" onClick={() => sortTable("first_name")}>
              First Name
            </th>
            <th scope="col">Last Name</th>
            <th scope="col">age</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          {data &&
             data.slice(startIndex, endIndex).map((el, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td className="clickable_fname">
                    <Link to={`/users/${el.id}`} className="link">
                      {el.first_name}
                    </Link>
                  </td>
                  <td>{el.last_name}</td>
                  <td>{el.age}</td>
                  <td>{el.email}</td>
                  <td>
                    <Link to={el.web} className="link" target="_blank">
                      {el.web}
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <Pagination pagesList={pagesList} ChangePage={ChangePage} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default Table;
