import React from "react";
import PropTypes from 'prop-types';
import styles from './Profile.module.css'

function Profile ({name, tag, location, avatar, stats}) {
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className={styles.avatar}
                />
                <p className="name">{name}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>
            <ul className="stats">
                <li>
                    <span className="label">Followers</span>{': '}
                    <span className="quantity">{stats.followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>{': '}
                    <span className="quantity">{stats.views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>{': '}
                    <span className="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.defaultProps = {
    name: 'User Name',
    tag: 'User tag',
    location: 'User location',
    avatar: 'https://mantenimientocode.xyz/images/not-found.jpg',
    stats: {
        followers: 0,
        views: 0,
        likes: 0
    }
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired)
}


export default Profile;