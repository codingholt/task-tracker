import React from 'react'
import './header.css'
import Button from './Button';
const Header = ({onAdd}) => {



  return (
    <header>
        <h1>TaskTracker</h1>
        <Button color='black' text='Add' textColor='white' onClick={onAdd}/>
    </header>
  );
}



export default Header