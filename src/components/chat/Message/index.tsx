import React from 'react'
import { IMessage } from '../../../models'
import styles from './index.module.scss'

interface MessageProps {
  message: IMessage
  isUser: boolean
}

export default function Message({ message, isUser }: MessageProps) {
  return (
    <p
      className={
        `${styles.message} ` +
        (isUser ? styles.message_my : styles.message_guest)
      }
    >
      {message.content}
    </p>
  )
}
