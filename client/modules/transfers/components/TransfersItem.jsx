import React, { PropTypes } from 'react';

const TransfersItem = ({ transfer }) => {
  const { operationDate, operType, description, opStatusDesc, amount } = transfer;
  return (
    <tr>
      <td>{operationDate}</td>
      <td>{operType}</td>
      <td>{description}</td>
      <td>{opStatusDesc}</td>
      <td>{amount}&euro;</td>
    </tr>
  );
};

TransfersItem.propTypes = {
  transfer: PropTypes.shape({
    operationDate: PropTypes.string.isRequired,
    operType: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    opStatusDesc: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};

export default TransfersItem;
