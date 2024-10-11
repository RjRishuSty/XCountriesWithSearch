import React from 'react'
import Styles from './Navbar.module.css';
import SearchCom from '../Search/Search';
const Navbar = () => {
  return (
    <div className={Styles.nav}>
        <SearchCom/>
    </div>
  )
} 
export default Navbar