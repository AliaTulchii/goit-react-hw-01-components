import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    
    return (
        <table className={css.transaction_history}>
            <thead>
                <tr className={css.head}>
                    <th className={css.th}>Type</th>
                    <th className={css.th}>Amount</th>
                    <th className={css.th}>Currency</th>
                </tr>
            </thead>
                      
            <tbody>
                {items.map(({id, type, amount, currency}) => (
                    <tr className={css.body} key={id}>
                        <td className={css.td_type}>{type}</td>
                        <td className={css.td_amount}>{amount}</td>
                        <td className={css.td_currency}>{currency}</td>
                    </tr>
                )
                    
                )}
            </tbody>
        </table>
    );
};
  
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}
