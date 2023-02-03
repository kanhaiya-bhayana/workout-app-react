import React, { useState,useEffect } from 'react'

export default function Visualization() {
    const [det,setDet] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8000/WorkoutCollection")
      .then(res=>res.json())
      .then(data=>{
        setDet(data)
      })
    }, [])


    const delFUnc = (id) =>{
      fetch(`http://localhost:8000/WorkoutCollection/${id}`,{
          method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
          let newData = det.filter((d)=> d.id !== id)
          setDet(newData)
        })
          
      }

    const listWorkoutDetails = det.map((data,i)=>{
        return (
            <tr key={i}>
        <th scope="row">{i+1}</th>
        <td>{data.title}</td>
        <td>{data.note}</td>
        <td>{data.calBurnPM}</td>
        <td>{data.categName}</td>
        <td><button type="button" onClick={() => delFUnc(data.id)} className="btn btn-danger">Delete</button></td>
        </tr>
        )
    })
    
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Note</th>
      <th scope="col">Calories Burn Per Minute</th>
      <th scope="col">Category Name</th>
    </tr>
  </thead>
  <tbody>
  {listWorkoutDetails}
  </tbody>
</table>
  )
}