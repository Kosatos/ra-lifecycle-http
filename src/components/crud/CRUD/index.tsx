import React, { useEffect } from 'react'
import { useState } from 'react'
import { INote } from '../../../models'
import Note from '../Note'
import AddNoteForm from '../AddNoteForm'
import styles from './index.module.scss'

export default function CRUD() {
  const [notes, setNotes] = useState<INote[]>([])

  const getData = async () => {
    const response = await fetch('http://localhost:7777/notes')
    const data = await response.json()
    setNotes(data)
  }
  const addNoteHandler = async (note: INote) => {
    await fetch('http://localhost:7777/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(note),
    })
    getData()
  }
  const removeNoteHandler = async (id: number) => {
    await fetch(`http://localhost:7777/notes/${id}`, {
      method: 'DELETE',
    })
    getData()
  }
  const updateNotesHandler = async () => {
    getData()
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={styles.crud}>
      <div className={styles.crud__header}>
        <h2 className={styles.crud__title}>Notes</h2>
        <button
          className={styles.crud__update}
          onClick={updateNotesHandler}
        ></button>
      </div>
      {!notes.length ? (
        <h3>Add your first note</h3>
      ) : (
        <div className={styles.crud__notes}>
          {notes.map((note) => (
            <Note note={note} onRemove={removeNoteHandler} key={note.id}></Note>
          ))}
        </div>
      )}
      <AddNoteForm onAdd={addNoteHandler}></AddNoteForm>
    </div>
  )
}
