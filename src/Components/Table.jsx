import React from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
const Table = ({ data }) => {
  let start = 0;
  let pageSize = 50;
  let pagesList = [];
  const sortTable = (columnName) => {
    if (columnName === "first_name") {
      data.sort((a, b) =>
        a.first_name > b.first_name ? 1 : b.first_name > a.first_name ? -1 : 0
      );
    }
  };

  let totalPages = Math.ceil(data.length / pageSize);
  for (let i = 1; i <= totalPages; i++) {
    pagesList.push(i);
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="heading">
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
            data.slice(start, pageSize).map((el, index) => {
              return (
                <tr key={index}>
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
        <Pagination pagesList={pagesList} />
      </div>
    </div>
  );
};

export default Table;
