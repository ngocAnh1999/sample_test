import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import Menu from './component/menu/Menu';
import Home from './component/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import About from './component/about/About';
import Contact from './component/contact/Contact';

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/contact"><Contact /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </Router>
  );
}

export default App;
