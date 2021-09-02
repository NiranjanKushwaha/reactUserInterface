import React from 'react';
import {useParams,Link} from 'react-router-dom';
const DetailsPage = ({data}) => {
    let {id}=useParams();
    console.log(`id is : ${id}`);
    data.filter(el=>el.id===id).map(el=>console.log(el));
    return (
        <div>
           {id}
          { data.filter(el=>el.id===id).map(el=>console.log(el))}
        </div>
    )
}

export default DetailsPage
