import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
const Table = ({ data }) => {
  let pageSize = 50;
  console.log("data received in table: " + data.length);
  let totalPages = Math.ceil(data.length / pageSize);
  let [startIndex, setStartIndex] = useState(0);
  let [endIndex, setEndIndex] = useState(
    Math.ceil(data.length / totalPages) - 1
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [Asc1, setAsc1] = useState(false);
  const [Dsc1, setDsc1] = useState(true);
  const [Asc2, setAsc2] = useState(false);
  const [Dsc2, setDsc2] = useState(true);
  const [Asc3, setAsc3] = useState(false);
  const [Dsc3, setDsc3] = useState(true);
  const [Asc4, setAsc4] = useState(false);
  const [Dsc4, setDsc4] = useState(true);
  const [Asc5, setAsc5] = useState(false);
  const [Dsc5, setDsc5] = useState(true);

  let pagesList = [];
  const sortTable = (columnName) => {
    if (columnName === "first_name") {
      if (!Asc1) {
        data.sort((a, b) =>
          a.first_name > b.first_name ? 1 : b.first_name > a.first_name ? -1 : 0
        );
        setAsc1(true);
        setDsc1(false);
      }
      if (!Dsc1) {
        data.sort((a, b) =>
          a.first_name < b.first_name ? 1 : b.first_name < a.first_name ? -1 : 0
        );
        setDsc1(true);
        setAsc1(false);
      }
    }
    if (columnName === "last_name") {
      if (!Asc2) {
        data.sort((a, b) =>
          a.last_name > b.last_name ? 1 : b.last_name > a.last_name ? -1 : 0
        );
        setAsc2(true);
        setDsc2(false);
      }
      if (!Dsc2) {
        data.sort((a, b) =>
          a.last_name < b.last_name ? 1 : b.last_name < a.last_name ? -1 : 0
        );
        setDsc2(true);
        setAsc2(false);
      }
    }
    if (columnName === "age") {
      if (!Asc3) {
        data.sort((a, b) => (a.age > b.age ? 1 : b.age > a.age ? -1 : 0));
        setAsc3(true);
        setDsc3(false);
      }
      if (!Dsc3) {
        data.sort((a, b) => (a.age < b.age ? 1 : b.age < a.age ? -1 : 0));
        setDsc3(true);
        setAsc3(false);
      }
    }
    if (columnName === "email") {
      if (!Asc4) {
        data.sort((a, b) =>
          a.email > b.email ? 1 : b.email > a.email ? -1 : 0
        );
        setAsc4(true);
        setDsc4(false);
      }
      if (!Dsc4) {
        data.sort((a, b) =>
          a.email < b.email ? 1 : b.email < a.email ? -1 : 0
        );
        setDsc4(true);
        setAsc4(false);
      }
    }
    if (columnName === "web") {
      if (!Asc5) {
        data.sort((a, b) => (a.web > b.web ? 1 : b.web > a.web ? -1 : 0));
        setAsc5(true);
        setDsc5(false);
      }
      if (!Dsc5) {
        data.sort((a, b) => (a.web < b.web ? 1 : b.web < a.web ? -1 : 0));
        setDsc5(true);
        setAsc5(false);
      }
    }
  };

  // const sortTable = (columnName,num) => {
  //   let columnNames=["first_name","last_name","age","email","web"];
  //   columnNames.filter(el=>el===columnName).map(el=>{
  //     if (!Asc) {
  //       data.sort((a, b) =>
  //         a.el > b.el ? 1 : b.el > a.el ? -1 : 0
  //       );
  //       setAsc(true);
  //       setDsc(false);
  //     }
  //     if (!Dsc) {
  //       data.sort((a, b) =>
  //         a.el < b.el ? 1 : b.el < a.el ? -1 : 0
  //       );
  //       setDsc(true);
  //       setAsc(false);
  //     }
  //     return data;
  //   })
  // if (columnName === "first_name") {
  //   if (!Asc) {
  //     data.sort((a, b) =>
  //       a.first_name > b.first_name ? 1 : b.first_name > a.first_name ? -1 : 0
  //     );
  //     setAsc(true);
  //     setDsc(false);
  //   }
  //   if (!Dsc) {
  //     data.sort((a, b) =>
  //       a.first_name < b.first_name ? 1 : b.first_name < a.first_name ? -1 : 0
  //     );
  //     setDsc(true);
  //     setAsc(false);
  //   }
  // }
  // };

  for (let i = 1; i <= totalPages; i++) {
    pagesList.push(i);
  }
  const ChangePage = (page) => {
    setStartIndex((page - 1) * pageSize);
    setEndIndex((page - 1) * pageSize + pageSize);
    setCurrentPage(page);
  };
  useEffect(() => {}, [
    Asc1,
    Dsc1,
    Asc2,
    Dsc2,
    Asc3,
    Dsc3,
    Asc4,
    Dsc4,
    Asc5,
    Dsc5,
  ]);
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="heading">
            <th scope="col" onClick={() => sortTable("first_name")}>
              First Name &nbsp;
              <i
                class={
                  Asc1 ? "fas fa-caret-square-up" : "fas fa-caret-square-down"
                }
              ></i>
            </th>
            <th scope="col" onClick={() => sortTable("last_name", 2)}>
              Last Name &nbsp;
              <i
                class={
                  Asc2 ? "fas fa-caret-square-up" : "fas fa-caret-square-down"
                }
              ></i>
            </th>
            <th scope="col" onClick={() => sortTable("age")}>
              age &nbsp;
              <i
                class={
                  Asc3 ? "fas fa-caret-square-up" : "fas fa-caret-square-down"
                }
              ></i>
            </th>
            <th scope="col" onClick={() => sortTable("email")}>
              Email &nbsp;
              <i
                class={
                  Asc4 ? "fas fa-caret-square-up" : "fas fa-caret-square-down"
                }
              ></i>
            </th>
            <th scope="col" onClick={() => sortTable("web")}>
              Website &nbsp;
              <i
                class={
                  Asc5 ? "fas fa-caret-square-up" : "fas fa-caret-square-down"
                }
              ></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.slice(startIndex, endIndex).map((el, index) => {
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
        <Pagination
          pagesList={pagesList}
          ChangePage={ChangePage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Table;
