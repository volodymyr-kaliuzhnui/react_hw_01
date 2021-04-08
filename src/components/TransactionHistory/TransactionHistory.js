import React from 'react';
import styles from './TransacrionHistory.module.css';
import PropTypes from 'prop-types';

function TransactionHistory({items}) {
    return (
        <table className={styles['transaction-history']}>
            <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>
            <tbody>
            {items.map(({id, type, amount, currency }) => {
                let typeUpperCase = type[0].toUpperCase() + type.slice(1);
                return (
                    <tr key={id}>
                        <td>{typeUpperCase}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

TransactionHistory.defaultProps = {
    items: [
        {
            id: '0',
            type: 'Not found',
            amount: '0',
            currency: 'Not found'
        }
    ]
}


export default TransactionHistory