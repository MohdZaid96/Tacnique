import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import ModalWin from "./ModalWin";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [render, setRender] = useState(false);
  const navigate = useNavigate();
  const [editBlock, setEditBlock] = useState(false);
  const [edit, setEdit] = useState()

  useEffect(() => {
    if (render) setRender(false)
}, [render]);

  const getUsers = async () => {
    try {
      const data = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      alert("User Deleted");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, [])

  const handleEdit = (id) => {
    setEditBlock(true)
    setEdit(id);
  }

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Company</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name.split(" ")[0]}</td>
              <td>{user.name.split(" ")[1]}</td>
              <td>{user.email}</td>
              <td>{user.company.name}</td>
              <td>
                <button type="button" class="btn btn-primary" onClick={() => handleEdit(user.id)}>Edit</button>
              </td>
              <td>
                <button type="button" class="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalWin
        show={editBlock}
        onHide={() => setEditBlock(false)}
        users={users}
        edit={edit}
        setRender={setRender}
        flag={false}
      />
    </div>
  );
};

export default Users;
