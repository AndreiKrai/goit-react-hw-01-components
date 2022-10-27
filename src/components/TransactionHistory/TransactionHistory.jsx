import PropTypes from 'prop-types';
import { Transaction } from './Transaction/Transaction';
export const TransactionHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(oneTransaction => (
          <Transaction
            key={oneTransaction.id}
            type={oneTransaction.type}
            amount={oneTransaction.amount}
            currency={oneTransaction.currency}
          />
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
