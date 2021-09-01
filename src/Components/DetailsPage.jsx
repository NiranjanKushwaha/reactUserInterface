import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
const DetailsPage = () => {
    let {id}=useParams();
    let [data, setData] = useState([]);
    let userData=[];
    const url='https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json';
    useEffect(()=>{
        const getData=async()=>{
             const res=await axios(url);
             setData(res.data);
        }
        getData();
        data.forEach(el=>{
            if (el.id===id) {
                console.log(el);
                userData.push(el);
              }
        })
     })

    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}

export default DetailsPage
