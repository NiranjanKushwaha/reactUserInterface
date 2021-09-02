import React from "react";

const Pagination = ({ pagesList,ChangePage}) => {
  return (
    <ul className="pagination">
      {pagesList.map((page,index) => (
        <li className="page-item" key={index}>
          <button className="page-link" onClick={()=>ChangePage(page)}>{page}</button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
