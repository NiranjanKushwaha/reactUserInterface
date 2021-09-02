import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
const DetailsPage = ({data}) => {
    const[user,setUser]=useState([]);
    let {id}=useParams();
    useEffect(()=>{
        let userData=data.filter(el=>el.id==id);
        console.log(userData);
        setUser(userData);
    },[])
    return (
        <div>
        {user.map(el=>(
            <div key={el.id}>
            <p>{el.first_name}</p>
            <p>{el.last_name}</p>
            </div>
        ))}
        </div>
    )
}

export default DetailsPage
