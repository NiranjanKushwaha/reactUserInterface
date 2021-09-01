import React from "react";
import {Link} from 'react-router-dom';

const Table = (props) => {
  let details = [];
  details=props.data;
  let start=0;
  let last=10;

 const sortTable = (columnName) => {
    if (columnName==='first_name') {
      details.sort((a,b) => (a.first_name > b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0))
    //   details.map(el=>console.log(el.first_name));
    } 

  };

  function handlePrevious(start,next){
      if(start>10){
          start-=10;
          next-=10;
      }
  }

  function handleNext(start,next){
    if(next<details.length){
        start+=10;
        next+=10;
    }
}

  return (
    <div>
      <table className="table">
        <thead>
          <tr className="heading">
            <th scope="col" onClick={()=>sortTable('first_name')}>First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">age</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
            {details &&
              details.slice(start, last).map((el,index) => {
                return (
                  <tr key={index}>
                    <td className="clickable_fname"><Link to={`/users/${el.id}`} className='link'>{el.first_name}</Link></td>
                    <td>{el.last_name}</td>
                    <td>{el.age}</td>
                    <td>{el.email}</td>
                    <td><Link to={el.web} className='link'>{el.web}</Link></td>
                  </tr>
                );
              })}
        </tbody>
      </table>
      <div className="text-center">
            <button className="text-primary btn" onClick={()=>handlePrevious(start,last)}>Previous</button>
            <button className="text-primary btn" onClick={()=>handleNext(start,last)}>Next</button>
        </div>
    </div>
  );
};

export default Table;
