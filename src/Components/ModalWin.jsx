import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';

const ModalWin = (props) => {
    
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [company,setCompany]=useState();
 
 
    useEffect(() => {
        if(!props?.flag){
            const item = props?.users?.find((elem) => elem?.id === props?.edit)
 
            if(item){
              setName(item.name || "")
              setEmail(item.email || "")
              setCompany(item.company.name || "")
        
            }
        }else{

        }
    
    }, [props?.users, props?.edit])
 
   const editUser = async () => {
     try {
 
       const formData = {
         name,email,
         company:{name:company}
       }
       await axios.patch(`https://jsonplaceholder.typicode.com/users/${props?.edit}`,{
         formData
       });
       alert("User edited");
       props?.onHide();
       props?.setRender(true);
       
       
     } catch (error) {
       console.log(error);
     }
   }

   const addUser = async () => {
    try {

      const formData = {
        name,email,
        company:{name:company}
      }
      await axios.post(`https://jsonplaceholder.typicode.com/users`,{
        formData
      });
      alert("User Added");
      props?.onHide();      
      
    } catch (error) {
      console.log(error);
    }
  }
   return (
     <Modal
       {...props}
       size="md"
       aria-labelledby="contained-modal-title-vcenter"
       centered
     >
       <Modal.Header>
         <Modal.Title id='contained-modal-title-vcenter'>{props?.addFlag?"Add User":"Update User"}</Modal.Title>
       </Modal.Header>
       <Modal.Body>
        <div>
           <div className="mb-3">
             <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
             <input type="text" className="form-control" value={props?.flag?"":name} onChange={(e) => setName(e.target.value)} />
           </div>
           <div className="mb-3">
             <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
             <input type="text" className="form-control" value={props?.flag?"":email} onChange={(e) => setEmail(e.target.value)} />
           </div>
           <div className="mb-3">
             <label htmlFor="formGroupExampleInput2" className="form-label">Company</label>
             <input type="text" className="form-control" value={props?.flag?"":company} onChange={(e) => setCompany(e.target.value)} />
           </div>
           <div className="mb-3 d-flex justify-content-end">
             <button type="button" class="btn btn-primary" onClick={editUser}>{props?.flag?"Add User":"Update User"}</button>
           </div>
         </div>
 
       </Modal.Body>
     </Modal>
   )
}

export default ModalWin