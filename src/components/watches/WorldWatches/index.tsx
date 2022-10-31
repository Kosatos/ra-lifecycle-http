import React from 'react'
import { useState } from 'react'
import styles from './index.module.scss'
import { IWatches } from '../../../models'
import AddWatchesForm from '../AddWatchesForm'
import Watches from '../Watches'

export default function WorldWatches() {
  const [watches, setWatches] = useState<IWatches[]>([])
  const addWatchesHandler = (watches: IWatches) => {
    setWatches((prev) => [...prev, watches])
  }
  const removeWatchesHandler = (id: string) => {
    console.log('click')
    setWatches((prev) => prev.filter((item) => item.id !== id))
  }
  return (
    <div className={styles['world-watches']}>
      <AddWatchesForm onAdd={addWatchesHandler}></AddWatchesForm>
      {!watches.length ? (
        <h2>Добавьте свои первые часы</h2>
      ) : (
        <div className={styles['world-watches__watches']}>
          {watches.map((item) => (
            <Watches
              watches={item}
              onRemove={removeWatchesHandler}
              key={item.id}
            ></Watches>
          ))}
        </div>
      )}
    </div>
  )
}
