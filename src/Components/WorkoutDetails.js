

import React, {useState} from 'react'


export default function WorkoutDetails() {

    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')
    const [calBurnPM, setCalbpm] = useState()
    const [categName, setCatName] = useState()  
    const [message, setMessage] = useState()

    const addWorkoutDetails = () => {
        console.log('add employee..' , title,note,calBurnPM,categName)
        fetch('http://localhost:8000/workouts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({title,note,calBurnPM,categName})

        })
        .then(res=>{
            if(res.status === 201){
                setMessage('Details added successfully!')
                console.log("res is ", res.body)
            }
        });
    }

   
    return (
        <>
       {message && (<div className="alert alert-success" role="alert">
        {message}
        </div>)}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Title</span>
                <input type="text"  onChange={(e)=> setTitle(e.target.value)} value={title} className="form-control" placeholder="Enter title" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Note</span>
                <input type="text"  onChange={(e)=> setNote(e.target.value)} value={note} className="form-control" placeholder="Enter note" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Calories Burn/m</span>
                <input type="text"  onChange={(e)=> setCalbpm(e.target.value)} value={calBurnPM} className="form-control" placeholder="Enter calories burn /m" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Category Name</span>
                <input type="text"  onChange={(e)=> setCatName(e.target.value)} value={categName} className="form-control" placeholder="Enter category" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <button onClick={addWorkoutDetails} className='btn btn-primary'>Add Details</button>
        </>
  )
}
