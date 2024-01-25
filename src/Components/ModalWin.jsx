import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

const ModalWin = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [company, setCompany] = useState();

  useEffect(() => {
    if (!props?.flag) {
      const item = props?.users?.find((elem) => elem?.id === props?.edit);

      if (item) {
        setName(item.name || "");
        setEmail(item.email || "");
        setCompany(item.company.name || "");
      }
    }
  }, [props?.users, props?.edit]);

  const editUser = async () => {
    try {
      const formData = {
        name,
        email,
        company: { name: company },
      };
      await axios.patch(
        `https://jsonplaceholder.typicode.com/users/${props?.edit}`,
        {
          formData,
        }
      );
      alert("User edited");
      props?.onHide();
      props?.setRender(true);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async () => {
    try {
      const formData = {
        name,
        email,
        company: { name: company },
      };
      await axios.post(`https://jsonplaceholder.typicode.com/users`);
      alert("User Added");
      props?.onHide();
    } catch (error) {
      console.log(error);
    }
  };
  {
    /* <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                    <input type="text" className="form-control" value={props?.flag?"":email} onChange={(e) => setEmail(e.target.value)} />
               
               
                     <label htmlFor="formGroupExampleInput2" className="form-label">
              Company
            </label>
            <input
              type="text"
              className="form-control"
              value={props?.flag ? "" : company}
              onChange={(e) => setCompany(e.target.value)}
            />
               
               
                    */
  }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props?.addFlag ? "Add User" : "Update User"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form class="row g-3 needs-validation" novalidate>
          <div className="mb-3">
            <label htmlFor="validationServer01" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control is-valid"
              id="validationServer01"
              value={props?.flag ? "" : name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="mb-3">
            <div>
              <label htmlFor="validationServerUsername" className="form-label">
                Email
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend3">
                  @
                </span>
                <input
                  type="text"
                  className="form-control is-invalid"
                  id="validationServerUsername"
                  aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                  value={props?.flag ? "" : email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div
                  id="validationServerUsernameFeedback"
                  className="invalid-feedback"
                >
                  Please choose a username.
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="validationServer01" className="form-label">
              Company
            </label>
            <input
              type="text"
              className="form-control is-valid"
              id="validationServer01"
              value={props?.flag ? "" : company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="mb-3 d-flex justify-content-end">
            <button type="button" class="btn btn-primary" onClick={()=>{
                if(props?.flag){
                    addUser();
                }else{
                    editUser();
                }
            }}>
              {props?.flag ? "Add User" : "Update User"}
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalWin;
