import React from 'react';

const WalletStatus = ({ message, total }) => {
  return (
    <>
      {message && <div className="alert alert-info mt-2">{message}</div>}
      <div className="alert alert-success mt-2">Текущий баланс: {total} $.</div>
    </>
  );
};

export default WalletStatus;
