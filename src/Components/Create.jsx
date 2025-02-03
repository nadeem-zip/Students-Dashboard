import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

const Create = () => {
  let navigate = useNavigate()
  let [details,setDetails] = useState({
    name:"",
    email:"",
    contact:"",
    degree:"",
    stream:"",
    percentage:""
  })
  let {name,email,contact,stream,degree,percentage} = details
  let handleChange=(e)=>{
     let {name,value} = e.target
     setDetails({...details,[name]:value})
  }
  let handleSubmit=(e)=>{
    e.preventDefault()
      Axios.post("http://localhost:3000/users",details)
      navigate("/")
  }
  return (
    <>
      
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" name='name' id='name' value={name} onChange={handleChange}/>
      <br /><br />
      <label htmlFor="email">Email:</label>
      <input type="email" name='email' id='email' value={email} onChange={handleChange}/>
      <br /><br />
      <label htmlFor="contact">Phone:</label>
      <input type="tel" name='contact' id='contact'value={contact} onChange={handleChange}/>
      <br /><br />
      <label htmlFor="degree">Degree:</label>
      <input type="text" name='degree' id='degree'value={degree} onChange={handleChange}/>
      <br /><br />
      <label htmlFor="stream">Stream:</label>
      <input type="text" name='stream' id='stream' value={stream} onChange={handleChange}/>
      <br /><br />
      <label htmlFor="percentage">Percentage:</label>
      <input type="text" name='percentage' id='percentage'value={percentage} onChange={handleChange}/>
      <br /><br />
      <input type="submit" value="ADD USER" />
    </form>
    </>
  )
}

export default Create