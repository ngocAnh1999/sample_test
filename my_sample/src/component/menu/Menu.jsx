import React, {useRef, useEffect, useState} from 'react';
import baseStyles from '../Body.module.css';
import styles from './Menu.module.css';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

export default function Menu(props) {
  const [status, setStatus] = useState(false);
  return (
    <nav className={styles.menu_container}>
      <ul className={styles.ul_menu}>
        <li className={styles.menu_bar} onClick={() => setStatus(!status)} >
          <span>Menu</span>
          <Dropdown status={status} />
        </li>
        <li className={styles.li_menu}>
          <Link to="/" className={styles.menu_item}>Home</Link>
        </li>
        <li className={styles.li_menu}>
          <Link to="/about" className={styles.menu_item}>About</Link>
        </li>
        <li className={styles.li_menu}>
          <Link to="/contact" className={styles.menu_item}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
