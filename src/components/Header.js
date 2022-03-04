import React from 'react'
import './header.css'
import Button from './Button';
const Header = () => {
  return (
    <header>
        <h1>TaskTracker</h1>
        <Button color='black' text='Add'/>
    </header>
  );
}



export default Header