import React, { useState } from 'react';
import baseStyles from '../Body.module.css';
import styles from './Home.module.css';

export default function Home(props) {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let value = e.currentTarget[0].value;
    e.currentTarget[0].value = "";
    if(value !== "") {
      setTodos(todos => ([...todos, value]));
    }
  }
  const handleDelete = e => {
    let key = e.target.parentElement.id;
    let value = todos[key];
    setTodos(todos => {
      let todosCopied = todos.filter(item => item !== value);
      return todosCopied;
    });
  }

  const handleEdit = e => {
    let li = e.target.parentElement;
    let input = document.createElement('input');
    let lastChild = li.lastElementChild;
    input.value = lastChild.innerText;
    input.onkeyup = (event) => handleUpdate(event);
    li.removeChild(lastChild);
    li.appendChild(input);
  }

  const handleUpdate = e => {
    if(e.keyCode === 13) {
      let li = e.target.parentElement;
      let span = document.createElement('span');
      let lastChild = li.lastElementChild;
      span.innerText = lastChild.value;
      li.removeChild(lastChild);
      li.appendChild(span);
    }
  }

  return (
    <div className={baseStyles.container}>
      <h2>My home page, using show list todo</h2>
      <div>
        <ul>
          {
            todos.length ? todos.map((todo, index) => {
              return (
                <li key={index} id={index} className={styles.li_todo}>
                  <span onClick={(e)=>handleDelete(e)}
                    className={`${styles.delete} ${styles.action}`}>X</span>
                  <span onClick={e=>handleEdit(e)}
                    className={`${styles.edit} ${styles.action}`}>edit</span>
                  <span>{todo}</span>
                </li>)
            }) : null
          }
        </ul>
      </div>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <input placeholder="append list item" />
      </form>
    </div>
  );
}
