import React from 'react'
import './header.css'
import Button from './Button';
import AddTask from './AddTask'
const Header = () => {

const onClick = () =>{
  console.log('click')
}

  return (
    <header>
        <h1>TaskTracker</h1>
        <Button color='black' text='Add' onClick={onClick}/>
    </header>
  );
}



export default Header