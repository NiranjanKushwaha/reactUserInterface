import React,{useState,useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';
const DetailsPage = ({data}) => {
    const[user,setUser]=useState([]);
    let {id}=useParams();
    useEffect(()=>{
        let userData=data.filter(el=>el.id===parseInt(id));
        console.log(userData);
        setUser(userData);
    },[id,data])
    return (
        <div>
        {user.map(el=>(
            <div key={el.id} className="container">
               
            <table className="table detailsPageTable" border="1">
                <thead>
                <h1><Link to='/'><i class="fas fa-arrow-left"></i></Link> {el.first_name} {el.last_name}</h1>
                </thead>
                <tr>
                <td> First Name: <strong>{el.first_name}</strong></td>
                </tr>
                <tr><td>Last Name: <strong>{el.last_name}</strong></td></tr>
                <tr><td>Company Name: <strong>{el.company_name}</strong></td></tr>
                <tr><td>City: <strong>{el.city}</strong></td></tr>
                <tr><td>State: <strong>{el.state}</strong></td></tr>
                <tr><td>Zip: <strong>{el.zip}</strong></td></tr>
                <tr><td>Email: <strong>{el.email}</strong></td></tr>
                <tr><td>Web: <strong>{el.web}</strong></td></tr>
                <tr><td>Age: <strong>{el.age}</strong></td></tr>
            </table>
            </div>
        ))}
        </div>
    )
}

export default DetailsPage
