import React from 'react'
import { useState } from 'react'
import { IMessage } from '../../../models'
import styles from './index.module.scss'

interface AddMessageFormProps {
  onAdd(message: IMessage): void
}

export default function AddMessageForm({ onAdd }: AddMessageFormProps) {
  const [form, setForm] = useState({ content: '' })

  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ content: evt.target.value })
  }
  const submitHandler = (evt: React.FormEvent) => {
    evt.preventDefault()
    if (!form.content.trim()) {
      return
    }
    onAdd({ id: 0, userId: '', content: form.content })
    setForm({ content: '' })
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        name='content'
        id='content'
        value={form.content}
        onChange={changeHandler}
      ></input>
      <button></button>
    </form>
  )
}
