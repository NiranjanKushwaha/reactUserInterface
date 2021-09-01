import axios from 'axios';
import React,{useEffect,useState} from 'react';
import Table from './Table';
let renderArr = [];
const Users = () => {
    let [data, setData] = useState([]);
    let [input, setInput] = useState("");
    const [output, setOutput] = useState([]);
    const url='https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json';
    useEffect(()=>{
       const getData=async()=>{
            const res=await axios(url);
            setData(res.data);
       }
       getData();
    },[input])

const handleInput=(e)=>{
    setInput(e.target.value);
    if (e.key === 'Enter') {
        alert("Entered")
      }
}

const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      searchName(event);
    }
  }
const searchName=(e)=>{
    e.preventDefault();
    console.log(e);
    console.log(input);
    const filterArr = [];
    data.forEach((el) => {
        if (el.first_name.includes(input)|| el.last_name.includes(input)) {
          filterArr.push(el);
        } })
        setOutput(filterArr)
    };

 renderArr = output.length > 0 ? output : data;


    return (
        <div className='container-fluid'>
            <div className="row">
            <h3 className="m-3">Users</h3>
            <div>
                <input type="text" placeholder="Search Names here..." onChange={handleInput} value={input} onKeyPress={handleKeyPress} /><button><i className="fas fa-search" onClick={searchName}></i></button>
            </div>
            </div>
            <div className="row">
                <Table data={renderArr}/>
            </div>
        </div>
    )
}

export default Users;
