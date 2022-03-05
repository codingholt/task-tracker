import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import { useState } from 'react';
import 'terminal.css'
import './index.css'
import AddTask from './components/AddTask';

function App() {

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

  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) =>  task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
     task.id === id ?  {...task, reminder:
       !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header/>
      <AddTask/>
      {tasks.length > 0 ?
      ( <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> )
      : ('no tasks...')}
      <Footer/> 
      
    </div>
  );
}

export default App;
