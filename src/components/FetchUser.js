import React, { useEffect, useState } from 'react'
import Axios from 'axios';

const FetchUser = () => {
    let [users,setUsers]=useState(null);

        useEffect(()=>{
          Axios.get("https://reqres.in/api/users")
            .then((obj)=>{setUsers(obj.data)});
        },[])




  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Avatar</th>
        </tr>
        </thead>
        <tbody>
        {users&& users.data.map((data,ind)=>(  <tr key={ind}>
          <td key={`fname${ind}`}>{data.first_name}</td>
          <td key={`lname${ind}`}>{data.last_name}</td>
          <td key={`mail${ind}`}>{data.email}</td>
          <td key={`img${ind}`}><img src={data.avatar}/></td>
        </tr>
        ))}
        </tbody>
      
      </table>
    </div>
  )
}

export default FetchUser


