import React from "react";
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

function Statistics({title,  stats}) {
    let background = title ? styles['with-title'] : styles['without-title']
    return (
        <section className={background}>
            {title && <h2 className="title">{title}</h2>}
            <ul className="stat-list">
                {stats.map(({id, label, percentage}) => {
                    return (
                        <li className="item" key={id}>
                            <span className="label">{label}</span>{' '}
                            <span className="percentage">{percentage}%</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}


Statistics.defaultProps = {
    stats: [
        {
            id: 'id-?',
            label: 'Not found',
            percentage: 0
        }
    ]
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact(
            {
                id: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
                percentage: PropTypes.number.isRequired
            }
        )
    ).isRequired
}

export default Statistics;