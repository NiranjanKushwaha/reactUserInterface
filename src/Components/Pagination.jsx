import React from "react";

const Pagination = ({ pagesList }) => {
  return (
    <ul className="pagination">
      {pagesList.map((page,index) => (
        <li className="page-item" key={index}>
          <button className="page-link" >{page}</button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
