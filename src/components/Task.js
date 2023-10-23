import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
    return (
        <div className="task">
            <div className="taskHead">
                <p>{task.day}</p>
                <FaTimes style={{ cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
            </div>
            <div className="taskBody">
                <p>{task.task}</p>
            </div>

        </div>
    )
}

export default Task
