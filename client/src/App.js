import 'terminal.css'
import './index.css'
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';
const Axios = require('axios')




function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(
    [
        {
          id: 1,
          text: 'Doctor',
          day: 'Feb 5',
          reminder: true,
        },
        {
          id: 2,
          text: 'School',
          day: 'Feb 5',
          reminder: true,
        },
        {
          id: 3,
          text: 'Dentist',
          day: 'Feb 6',
          reminder: false,
        }
        
      
      ])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask =  {id, ...task}
    
    setTasks([...tasks, newTask])
    console.log(newTask)
    Axios.post('http://localhost:3001/new', 
    newTask).then(()=> {
      console.log('post request succes')
  })
    
}

const getTasks = async () =>{
  const req = await Axios.get('http://localhost:3001/tasks')
  const tasks = req.data
}

getTasks()

  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) =>  task.id !== id))

    Axios.post('http://localhost:3001/delete', 
    id).then(()=> {
      console.log('post request succes')
  })
}

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
     task.id === id ?  {...task, reminder:
       !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => {setShowAddTask(!showAddTask)}}/>

      {showAddTask &&  <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ?
      ( <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> )
      : ('no tasks...')}
      <Footer/> 
      
    </div>
  );
}

export default App;
