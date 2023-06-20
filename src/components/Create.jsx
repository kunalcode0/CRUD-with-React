import React from 'react'
import { useState } from 'react'
import './Create.css'
import { useNavigate ,Link } from 'react-router-dom'

function Create() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const url = "https://649040af1e6aa71680cae60f.mockapi.io/crud/cr/Create"
    const Read = useNavigate()
    const handleSubmit = async(event)=>{
        event.preventDefault();
       try {
       const response = await fetch(url,
        {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email}),
        }) 
        const jsonData = await response.json();
        console.log(jsonData);

       } catch (error) {
        console.log(error)
       }

       Read('/read')
    };
  return (
    <>
    <div className="create_main">
    <div className='create_container'>
        <div className="title">
        <div className="create_title">Create Data</div>
        <Link to = "/read">
        <button className="show_read">Show Items</button>
        </Link>
        </div>
        <div className="create_form">
     <form onSubmit={handleSubmit}>
        <label>
            Name
            <br />
            <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} />
        </label>
<br />
        <label>
            Email
            <br />
            <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </label>
        <br />
        <button className='create_button'>Create</button>
        </form> 
        </div>
        </div>
        </div>
    </>
  )
}

export default Create
