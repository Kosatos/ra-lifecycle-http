import React from 'react'
import { useState } from 'react'
import shortid from 'shortid'
import styles from './index.module.scss'
import { IWatches } from '../../../models'

interface AddWatchesFormProps {
  onAdd(watches: IWatches): void
}

export default function AddWatchesForm({ onAdd }: AddWatchesFormProps) {
  const [form, setForm] = useState({ title: '', timezone: '' })
  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [evt.target.name]: evt.target.value }))
  }
  const submitHandler = (evt: React.FormEvent) => {
    evt.preventDefault()
    if (!form.title.trim()) {
      return
    }
    onAdd({
      id: shortid.generate(),
      title: form.title,
      timezone: form.timezone ? +form.timezone : 0,
    })

    setForm({ title: '', timezone: '' })
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.form__input}>
        <label htmlFor='title'>Название</label>
        <input
          type='text'
          id='title'
          name='title'
          value={form.title}
          required
          onChange={changeHandler}
        />
      </div>

      <div className={styles.form__input}>
        <label htmlFor='timezone'>Временная зона</label>
        <input
          type='number'
          id='timezone'
          name='timezone'
          value={form.timezone}
          min='-12'
          max='14'
          onChange={changeHandler}
        />
      </div>

      <button className={styles.form__btn}>Добавить</button>
    </form>
  )
}
