import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import { useState } from 'react';
import 'terminal.css'
import './index.css'

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
    console.log('del' + id)
  }

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
      <Footer/>
      
    </div>
  );
}

export default App;
