import PropTypes from 'prop-types';
import { Transaction } from './Transaction/Transaction';
export const TransactionHistory = ({ transactions }) => {
  console.log(transactions)
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

// "id": "ea76146a-0b00-4b80-bc02-a8c822176712",
// "type": "withdrawal",
// "amount": "371.43",
// "currency": "MUR"
