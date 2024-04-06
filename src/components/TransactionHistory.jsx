import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableStyle = styled.table`
  border: solid;
  border-color: black;
  width: 100%;
`;
const TheadStyle = styled.thead`
  color: white;
  background-color: blue;
  margin: 0;
  padding: 20px;
`;
const TBodyStyle = styled.tbody`
  margin: 0;
`;
const TdStyle = styled.td`
  border: solid;
`;

export const TransactionHistory = ({ items }) => {
  const transactionsList = items.transactionsArr;
  return (
    <>
      <div>
        <TableStyle>
          <TheadStyle>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </TheadStyle>
          <TBodyStyle>
            {transactionsList.map(transaction => (
              <tr key={transaction.id}>
                <TdStyle>{transaction.type}</TdStyle>
                <TdStyle>{transaction.amount}</TdStyle>
                <TdStyle>{transaction.currency}</TdStyle>
              </tr>
            ))}
          </TBodyStyle>
        </TableStyle>
      </div>
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.shape({
    transactionsArr: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
      })
    ),
  }).isRequired,
};
