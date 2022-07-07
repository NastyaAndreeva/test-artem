import PropTypes from 'prop-types';

import { Transaction } from 'components/Transaction/Transaction';
import { StyledTable } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(el => {
          return (
            <Transaction
              key={el.id}
              type={el.type}
              amount={el.amount}
              currency={el.currency}
            />
          );
        })}
      </tbody>
    </StyledTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
