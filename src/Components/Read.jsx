import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Read = () => {
 let {id}= useParams()
 let navigate=useNavigate()
let [individual,setIndividual]= useState(null)
useEffect(()=>{
  let readData=async()=>{
    let {data}=await Axios.get(`http://localhost:3000/users/${id}`)
    setIndividual(data)
  }
  readData()
},[])
let handleHome=()=>{
 navigate('/')
}
let handleEdit=()=>{
  handleHome('/edit')
}
  return (
   <>
    {
      individual==null?"Loading...":<>
     <h1>{individual.id}</h1>
     <h1>{individual.name}</h1>
     <h1>{individual.email}</h1>
     <h1>{individual.degree}</h1>
     <h1>{individual.stream}</h1>
     <h1>{individual.percentage}</h1>
     <h1>{individual.contact}</h1>
     <button onClick={handleHome}>Home</button>
     <button onClick={handleEdit}>Edit</button>
     </>
    }
   </>
  )
}

export default Read