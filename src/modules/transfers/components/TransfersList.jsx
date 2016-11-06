import React, { PropTypes } from 'react';
import TransfersItem from './TransfersItem';

const TransfersList = ({ transfers }) => {
  const transfersItems = transfers.map((t, i) =>
    <TransfersItem key={i} transfer={t} />
  );
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Description</th>
          <th>Status</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transfersItems}
      </tbody>
    </table>
  );
};

TransfersList.propTypes = {
  transfers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransfersList;
