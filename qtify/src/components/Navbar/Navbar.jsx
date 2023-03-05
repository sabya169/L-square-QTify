import React from 'react';
import styles from "./Navbar.module.css";
import Logo from "../../components/Logo/Logo";
import Searchbar from '../Searchbar/Searchbar';
import Button from '../Button/Button';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Searchbar />
      <Button />
    </div>
  )
}

export default Navbar
