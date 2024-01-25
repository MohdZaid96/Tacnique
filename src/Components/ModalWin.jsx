import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

const ModalWin = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [company, setCompany] = useState();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  

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
    if(name.length>2 && emailRegex.test(email) && company.length>3){
    try {
      const formData = {
        name,
        email,
        company: { name: company },
      };
      await axios.patch(`https://jsonplaceholder.typicode.com/users/${props?.edit}`,formData);
      alert("User Updated");
      props?.onHide();
      props?.setRender(true);
    } catch (error) {
        alert("Updation Failed");
      console.log(error);
    }
    }else{
        alert("Please Provide a Valid input || Valid inputs are: 1. Name more than 2 words && 2. Valid Email && 3. Country more than 3 words ")

    }
  };

  const addUser = async () => {
     if(name?.length>2 && emailRegex.test(email) && company?.length>3){
    try {
      const formData = {
        name,
        email,
        company: { name: company },
      };
      await axios.post(`https://jsonplaceholder.typicode.com/users`,formData);
      alert("User Added");
      props?.onHide();
    } catch (error) {
        alert("User Not Saved");
      console.log(error);
    }
    }else{
        alert("Please Provide a Valid input || Valid inputs are: 1. Name more than 2 words && 2. Valid Email && 3. Country more than 3 words ")
    }
  };
   return (
     <Modal
       {...props}
       size="md"
       aria-labelledby="contained-modal-title-vcenter"
       centered
     >
       <Modal.Header>
         <Modal.Title id='contained-modal-title-vcenter'>{props?.flag?"Add User":"Update User"}</Modal.Title>
       </Modal.Header>
       <Modal.Body>
       <div>
           <div className="mb-3">
             <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
             <input type="text" className="form-control" value={props?.flag?"":name} onChange={(e) => setName(e.target.value)} required/>
           </div>
           <div className="mb-3">
             <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
             <input type="text" className="form-control" value={props?.flag?"":email} onChange={(e) => setEmail(e.target.value)} required />
           </div>
           <div className="mb-3">
             <label htmlFor="formGroupExampleInput2" className="form-label">Company</label>
             <input type="text" className="form-control" value={props?.flag?"":company} onChange={(e) => setCompany(e.target.value)} required/>
           </div>
           <div className="mb-3 d-flex justify-content-end">
             <button type="button" class="btn btn-primary" onClick={()=>{
                if(props?.flag){
                    addUser();
                }else{
                    editUser();
                }
             }}>{props?.flag?"Add User":"Update User"}</button>
           </div>
        </div>
 
       </Modal.Body>
     </Modal>
   )
}

export default ModalWin