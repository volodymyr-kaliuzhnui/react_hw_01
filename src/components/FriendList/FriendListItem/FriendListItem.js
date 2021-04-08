import React from 'react'
import styles from './FriendListItem.module.css'

function FriendListItem({avatar, name, isOnline}) {
    return (
        <li className={styles['list-item']}>
            <span className={isOnline ? styles.online : styles.offline}>{isOnline.toString()}</span>
            <img className={styles.avatar} src={avatar} alt={name} width="48"/>
            <p className="name">{name}</p>
        </li>
    )
}




export default FriendListItem