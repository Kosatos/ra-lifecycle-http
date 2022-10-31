import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './index.module.scss'
import { IWatches } from '../../../models'

interface WatchesProps {
  watches: IWatches
  onRemove(id: string): void
}

export default function Watches({ watches, onRemove }: WatchesProps) {
  const [time, setTime] = useState<Date>(new Date())
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timerId)
    }
  })

  return (
    <div className={styles.watches}>
      <h3 className={styles.watches__title}>{watches.title}</h3>
      <div className={styles.watches__body}>
        <div
          className={styles.watches__hour}
          style={{
            transform: `rotateZ(${
              (time.getHours() + watches.timezone) * 30
            }deg)`,
          }}
        ></div>
        <div
          className={styles.watches__min}
          style={{
            transform: `rotateZ(${time.getMinutes() * 6}deg)`,
          }}
        ></div>
        <div
          className={styles.watches__sec}
          style={{
            transform: `rotateZ(${time.getSeconds() * 6}deg)`,
          }}
        ></div>

        <span
          className={`${styles.watches__value} ${styles.watches__value_twelve}`}
        >
          12
        </span>
        <span
          className={`${styles.watches__value} ${styles.watches__value_one}`}
        >
          1
        </span>
        <span
          className={`${styles.watches__value} ${styles.watches__value_two}`}
        >
          2
        </span>
        <span
          className={`${styles.watches__value} ${styles.watches__value_three}`}
        >
          3
        </span>
        <span
          className={`${styles.watches__value} ${styles.watches__value_four}`}
        >
          4
        </span>
        <span
          className={`${styles.watches__value} ${styles.watches__value_five}`}
        >
          5
        </span>
        <span
          className={`${styles.watches__value} ${styles.watches__value_six}`}
        >
          6
        </span>
        <span
          className={`${styles.watches__value} ${styles.watches__value_seven}`}
        >
          7
        </span>
        <span
          className={`${styles.watches__value} ${styles.watches__value_eight}`}
        >
          8
        </span>
        <span
          className={`${styles.watches__value} ${styles.watches__value_nine}`}
        >
          9
        </span>
        <span
          className={`${styles.watches__value} ${styles.watches__value_ten}`}
        >
          10
        </span>
        <span
          className={`${styles.watches__value} ${styles.watches__value_eleven}`}
        >
          11
        </span>

        <div
          className={styles.watches__remove}
          onClick={() => onRemove(watches.id)}
        ></div>
      </div>
    </div>
  )
}

Watches.defaultProps = {
  timezone: 0,
}
