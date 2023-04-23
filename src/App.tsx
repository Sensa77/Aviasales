import React from 'react';
import styles from './App.module.scss';
import logo from './image/logo.svg';
import Main from './components/Main/Main.tsx';

function App() {
  return (
    <div className={styles.app}>
      <img className={styles.logo} src={logo} alt='logo'></img>
      <Main />
    </div>
  );
}

export default App;
