import Task from './Task'
import './tasks.css'
const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
    {tasks.map((task) => ( 
      <Task key={task.id} task={task} onDelete={onDelete}/>
    ))}
    </> 
  )
}

export default Tasks