import React,{useState} from 'react'
import logo from "../logo.png"
import { Link,useNavigate } from 'react-router-dom'
import ModalWin from './ModalWin';

const Navbar = () => {
    const navigate=useNavigate();
    const [editBlock, setEditBlock] = useState(false); 

    const handleAdd=()=>{
      setEditBlock(true)
    }
  return (
    <div className='Nav'>
        <div className='logo'>
            <img src={logo} alt='Logo'/>
        </div>
        <div className='add'>
            <button onClick={handleAdd}>Add</button>
            
        </div>
        <ModalWin
        show={editBlock}
        onHide={() => setEditBlock(false)}
        flag={true}
      />
    </div>
  )
}

export default Navbar