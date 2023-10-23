import React from 'react'
import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [task, setTask] = useState();
    const [day, setDay] = useState();
    const [reminder, setRemider] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()
        if (!task) {
            alert("please add a text!")
            return
        }

        onAdd({ task, day, reminder })
        setTask('')
        setDay('')
        setRemider(false)
    }

    return (
        <form id="addForm" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input className="textInput" size="50" type="text" placeholder="Add Task"
                    value={task} onChange={(e) => setTask(e.target.value)} />
                <label htmlFor="">Day</label>
                <input className="textInput" size="50" type="date"
                    value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control d-flex">
                <label htmlFor="">Reminder</label>
                <input size="" type="checkBox" placeholder="Add Task" onChange={(e) => setRemider(e.currentTarget.checked)} />
            </div>
            <input type="submit" placeholder="save" className="submitBut" />
        </form>
    )
}

export default AddTask
