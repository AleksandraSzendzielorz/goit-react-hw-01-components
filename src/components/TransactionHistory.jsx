const tableStyle = {
  border: 'solid',
  borderColor: 'black',
  width: '100%',
};
const theadStyle = {
  color: 'white',
  backgroundColor: 'blue',
  margin: 0,
  padding: 20,
};
const tBodyStyle = {
  margin: 0,
};
const tdStyle = {
  border: 'solid',
};

export const TransactionHistory = ({ items }) => {
  const transactionsList = items.transactionsArr;
  return (
    <>
      <div>
        <table style={tableStyle}>
          <thead style={theadStyle}>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody style={tBodyStyle}>
            {transactionsList.map(transaction => (
              <tr key={transaction.id}>
                <td style={tdStyle}>{transaction.type}</td>
                <td style={tdStyle}>{transaction.amount}</td>
                <td style={tdStyle}>{transaction.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
