import React from 'react';
import {useParams} from 'react-router-dom';
const DetailsPage = ({data}) => {
    let {id}=useParams();
    // let user=data.find(x => x.id === id);
    return (
        <div>
            <h1>{id}</h1>
            {/* {
                data.filter((list)=>list.id===id).map((list,index)=>(
                   <div key={index}>
                      <Link to="/"><i class="fas fa-arrow-left"></i>Details: {list.first_name}</Link>
                      <div>
                          <p>{list.first_name}</p>
                      </div>
                   </div>
                ))
            } */}
          {/* <p>{user.first_name}</p> */}
        </div>
    )
}

export default DetailsPage
