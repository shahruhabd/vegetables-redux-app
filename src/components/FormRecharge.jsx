import React, { useRef, useEffect } from 'react';

const FormRecharge = ({ onRecharge, amount, setAmount }) => {
  const amountInputRef = useRef(null);

  useEffect(() => {
    amountInputRef.current.focus();
  }, []);

  return (
    <form onSubmit={onRecharge}>
      <div className="form-group">
        <label htmlFor="amount">Сумма:</label>
        <input
          type="number"
          className="form-control"
          id="amount"
          ref={amountInputRef}
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder="Введите сумму"
        />
      </div>
      <button type="submit" className="btn btn-success mt-3">Пополнить</button>
    </form>
  );
};

export default FormRecharge;
