import React, {useRef, useEffect, useState} from 'react';
import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

export default function Dropdown(props) {

  return (
    props.status ? <div className={styles.dropdown_content}>
      <Link to="/">
        <div className={styles.dropdown_item}>
            Home
        </div>
      </Link>
      <Link to="/about">
        <div className={styles.dropdown_item}>
        About
        </div>
      </Link>
      <Link to="/contact">
        <div className={styles.dropdown_item}>
          Contact
        </div>
      </Link>
    </div> : null
  )
}
