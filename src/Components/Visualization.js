import React, { useState, useEffect } from 'react'

export default function Visualization() {
  const [det, setDet] = useState([]);
  const [startTime, setStrTIme] = useState([]);
  const [endTime, setStpTime] = useState([]);
  const [workoutID, setWorkoutID] = useState([]);
  const [actW,setActW] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/workouts")
      .then(res => res.json())
      .then(data => {
        setDet(data)
      })
  }, [])


  const delFUnc = (id) => {
    fetch(`http://localhost:8000/workouts/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        let newData = det.filter((d) => d.id !== id)
        setDet(newData)
      })

  }

  const startFunc = (id) => {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // console.log(time);
    fetch('http://localhost:8000/activeWorkouts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({workoutID:id,startTime:time,endTime})

    })
    .then(res=>{
        if(res.status === 201){
            console.log("res is ", res.body)
        }
    });
  }
  const stopFunc = (id) => {
    console.log(id);
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


    fetch(`http://localhost:8000/workouts/${id}/activeWorkouts`)
    .then(res => res.json())
      .then(data => {
        // console.log(data);
        // setActW(data)
        console.log(data[0].id);
        fetch(`http://localhost:8000/activeWorkouts/${data[0].id}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({endTime:time})

    })
    .then(res=>{
      
      var diff = Math.abs(data[0].startTime - data[0].endTime) / 1000;
            // var resolutionTime = ((diff / (1000 * 60)) % 60)
            console.log(diff);
      // console.log(res)
        if(res.status === 201){
            console.log("res is ", res.body)
            
        }
    });
      })
    // console.log(time);
    
  }

  const listWorkoutDetails = det.map((data, i) => {
    return (
      <tr key={i}>
        <th scope="row">{i + 1}</th>
        <td>{data.title}</td>
        <td>{data.note}</td>
        <td>{data.calBurnPM}</td>
        <td>{data.categName}</td>
        <td><button type="button" onClick={() => startFunc(data.id)} className="btn btn-success">Start</button></td>
        <td><button type="button" onClick={() => stopFunc(data.id)} className="btn btn-danger">Stop</button></td>
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