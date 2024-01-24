import React, { useEffect, useState } from "react";
import axios from "axios";
const Users = () => {
  const [users,setUsers]=useState([]);

  const getUsers=async()=>{
    try {
      const data= await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(data.data);
      console.log(users)
    } catch (error) {
      console.log(error);
    }
    
  }
  const handleEdit=async()=>{
    // try {
    //   const data= await axios.get("https://jsonplaceholder.typicode.com/users");
    //   setUsers(data.data);
    //   console.log(users)
    // } catch (error) {
    //   console.log(error);
    // }
    
  }
  const handleDelete=async()=>{
    // try {
    //   const data= await axios.get("https://jsonplaceholder.typicode.com/users");
    //   setUsers(data.data);
    //   console.log(users)
    // } catch (error) {
    //   console.log(error);
    // }
    
  }

  useEffect(()=>{
    getUsers();
  },[])
  return (
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Company</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user)=><tr>
              <th scope="row">{user.id}</th>
              <td>{user.name.split(" ")[0]}</td>
              <td>{user.name.split(" ")[1]}</td>
              <td>{user.email}</td>
              <td>{user.company.name}</td>
              <td><button onClick={handleEdit}>Edit</button></td>
              <td><button onClick={handleDelete}>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
