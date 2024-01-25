import React, { useState } from "react";
import logo from "../logo.png";
import { Link, useNavigate } from "react-router-dom";
import ModalWin from "./ModalWin";

const Navbar = () => {
  const navigate = useNavigate();
  const [editBlock, setEditBlock] = useState(false);

  const handleAdd = () => {
    setEditBlock(true);
  };
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">
         
          <img style={{width:"100px"}}  src={logo} alt="Logo" />
        </a>
        <div className="d-flex">
          <button type="button" class="btn btn-primary" onClick={handleAdd}>
            Add User
          </button>
        </div>
      </div>
      <ModalWin
        show={editBlock}
        onHide={() => setEditBlock(false)}
        flag={true}
      />
    </nav>
  );
};

export default Navbar;
