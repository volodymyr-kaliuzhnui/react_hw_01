import React from 'react'
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem'
import styles from './FriendList.module.css'

function FriendList({friends}) {
    return (
        <ul className={styles['friend-list']}>
            {friends.map(({avatar, name, isOnline, id}) => {
                return (
                    <FriendListItem key={id.toString()} avatar={avatar} name={name} isOnline={isOnline} />
                )
            })}
        </ul>
    )
}

FriendList.defaultProps = {
    friends: [
        {
            avatar: 'https://mantenimientocode.xyz/images/not-found.jpg',
            name: 'Not found',
            isOnline: false,
            id: 0
        }
    ]
}




FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact(
            {
                avatar: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                isOnline: PropTypes.bool.isRequired,
                id: PropTypes.number.isRequired
            }
        )
    ).isRequired
}


export default FriendList