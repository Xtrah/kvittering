import React from 'react';

import Form from './Form.js';

import Admin from './Admin.js';

import styles from './App.css';

const Abakus = () => (
  <div className={styles.logo}>
    <div className={styles.circle} />
    <div>Abakus</div>
  </div>
);

const App = () => (
  <div>
    <div className={styles.link}>
      {window.location.pathname === '/admin' ? (
        <a href="/">For resten</a>
      ) : (
        <a href="/admin">For økans</a>
      )}
    </div>
    <div className={styles.header}>
      <Abakus />
      <div>Kvitteringsskildring</div>
    </div>
    <div className={styles.container}>
      {window.location.pathname === '/admin' ? <Admin /> : <Form />}
    </div>
  </div>
);

export default App;