import React from 'react'
import { useState } from 'react'
import { INote } from '../../../models'
import styles from './index.module.scss'

interface AddNoteFormProps {
  onAdd(note: INote): void
}

export default function AddNoteForm({ onAdd }: AddNoteFormProps) {
  const [form, setForm] = useState({ content: '' })

  const changeHandler = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ content: evt.target.value })
  }
  const submitHandler = (evt: React.FormEvent) => {
    evt.preventDefault()
    if (!form.content.trim()) {
      return
    }
    onAdd({ id: 0, content: form.content })
    setForm({ content: '' })
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor='content'>New Note</label>
      <textarea
        name='content'
        id='content'
        value={form.content}
        onChange={changeHandler}
      ></textarea>
      <button></button>
    </form>
  )
}
