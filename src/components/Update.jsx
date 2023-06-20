import React from 'react'
import { useNavigate , Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import './Update.css'
function Update() {
  const [id , setId] = useState(0);
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    
    setId( localStorage.getItem("id"))
    setName( localStorage.getItem("name"))
    setEmail( localStorage.getItem("email"))

  }, [])

  const handleUpdate = (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
    };
    fetch(`https://649040af1e6aa71680cae60f.mockapi.io/crud/cr/Create/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((response) => response.json())
    .then(()=>{
      navigate("/read")
    })
     
      
  };
  return (
    

<>
<div className="update_main">
<div className='update_container'>
        <div className="title">
        <div className="update_title">Update Data</div>
        </div>
        <div className="update_form">
     <form >
        <label>
            Name
            <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} />
        </label>
<br />
        <label>
            Email
            <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </label>
        <br />
        <button onClick={handleUpdate} className='update_button'>Update</button>
        <Link to = '/read'>
        <button className="update_cancel">Cancel</button>
        </Link>
        </form> 
        </div>
    </div>
    </div>       
    </>
  )
}

export default Update

