import React from 'react'
import styles from './App.module.scss'
import WorldWatches from './components/watches/WorldWatches'
import CRUD from './components/crud/CRUD'
import Chat from './components/chat/Chat'

function App() {
  return (
    <div className={styles.container}>
      <h2 className={styles.taskTitle}>Watches</h2>
      <hr />
      <WorldWatches></WorldWatches>
      <h2 className={styles.taskTitle}>CRUD</h2>
      <hr />
      <CRUD></CRUD>
      <h2 className={styles.taskTitle}>Chat</h2>
      <hr />
      <Chat></Chat>
    </div>
  )
}

export default App
