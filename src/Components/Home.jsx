import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate=useNavigate()
 let [users,setUsers]= useState(null)
 useEffect(()=>{
  let fetchData=async()=>{
    let {data}=await Axios.get("http://localhost:3000/users")
    setUsers(data)
  }
  fetchData()
 },[])
 let handleCreateUser=()=>{
  navigate("/create")
 }
 let handleRead=(id)=>{
  navigate(`/read/${id}`)
 }
 let handleDelete=(id)=>{
  Axios.delete(`http://localhost:3000/users/${id}`)
  location.reload
 }
 let handleEdit=(id)=>{
  navigate(`edit/${id}`)
 }
  return (
   <>
   <button onClick={handleCreateUser}>ADD USER</button>
    <table border={2}>
     <tr>
      <th>Sl.no</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Degree</th>
      <th>Stream</th>
      <th>Percentage</th>
      <th>Edit</th>
      <th>Read</th>
      <th>Delete</th>
     </tr>
     {users==null?<tr><td>LOADING....</td></tr>:users.map((ele,ind)=>{
      return <tr key={ele.id}>
        <td>{ind+1}</td>
        <td>{ele.name}</td>
        <td>{ele.email}</td>
        <td>{ele.contact}</td>
        <td>{ele.degree}</td>
        <td>{ele.stream}</td>
        <td>{ele.percentage}</td>
        <td><button onClick={()=>handleEdit(ele.id)}>Edit</button></td>
        <td><button onClick={()=>handleRead(ele.id)}>Read</button></td>
        <td><button onClick={()=>handleDelete(ele.id)}>Delete</button></td>
      </tr>
     })}
    </table>
   </>
  )
}

export default Home