import React from 'react'
import { INote } from '../../../models'
import styles from './index.module.scss'

interface NoteProps {
  note: INote
  onRemove(id: number): void
}
export default function Note({ note, onRemove }: NoteProps) {
  return (
    <div className={styles.note}>
      <p className={styles.note__content}>{note.content}</p>
      <button
        className={styles.note__remove}
        onClick={() => onRemove(note.id)}
      ></button>
    </div>
  )
}
