import React, { useEffect } from 'react'
import { useState } from 'react'
import ScrollableFeed from 'react-scrollable-feed'
import shortid from 'shortid'
import { IMessage } from '../../../models'
import Message from '../Message'
import AddMessageForm from '../AddMessageForm'
import styles from './index.module.scss'

export default function Chat() {
  const [messages, setMessages] = useState<IMessage[]>([])
  const ls = window.localStorage

  const getLastMessage = async () => {
    const response = await fetch(
      `http://localhost:7777/messages?from=${
        !messages.length ? 0 : messages.length + 1
      }`
    )
    const data = await response.json()
    if (!data.length || messages.some((mes) => mes.id === data.at(-1).id)) {
      return
    }

    setMessages((prev) => [...prev, ...data])
  }
  const addMessageHandler = async (message: IMessage) => {
    await fetch('http://localhost:7777/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ ...message, userId: ls.getItem('userId') }),
    })
  }

  useEffect(() => {
    if (!ls.getItem('userId')) ls.setItem('userId', shortid.generate())
    const timerId = setInterval(getLastMessage, 500)

    return () => {
      clearInterval(timerId)
    }
  })

  return (
    <div className={styles.chat}>
      <div className={styles.chat__messages}>
        {!messages.length ? (
          <h2>Начните чат с собеседником</h2>
        ) : (
          <ScrollableFeed>
            {messages.map((mes) => (
              <Message
                message={mes}
                isUser={mes.userId === ls.getItem('userId')}
                key={mes.id}
              ></Message>
            ))}
          </ScrollableFeed>
        )}
      </div>
      <AddMessageForm onAdd={addMessageHandler}></AddMessageForm>
    </div>
  )
}
