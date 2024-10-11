
import React from 'react'
import Styles from './Navbar.module.css';
import Search from '../Search/Search';
const Navbar = () => {
  return (
    <div className={Styles.nav}>
        <Search/>
    </div>
  )
} 

export default Navbar
