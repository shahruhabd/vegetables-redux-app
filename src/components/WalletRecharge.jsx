import React, { useState, useEffect, useRef } from 'react';
import FormRecharge from './FormRecharge';
import WalletStatus from './WalletStatus';

const WalletRecharge = () => {
  const [amount, setAmount] = useState('');
  const [total, setTotal] = useState(() => Number(localStorage.getItem('walletBalance')) || 0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('walletBalance', total);
  }, [total]);

  const handleRecharge = (e) => {
    e.preventDefault();
    const rechargeAmount = parseFloat(amount);
    if (isNaN(rechargeAmount) || rechargeAmount <= 0) {
      setMessage('Пожалуйста, введите действительную сумму для пополнения.');
      return;
    }
    setTotal(prevTotal => prevTotal + rechargeAmount);
    setMessage(`Ваш кошелек успешно пополнен на ${rechargeAmount} $. Текущий баланс: ${total + rechargeAmount} $.`);
    setAmount('');
  };

  return (
    <div className="wallet-recharge mt-4">
      <h3>Пополнение кошелька</h3>
      <FormRecharge onRecharge={handleRecharge} amount={amount} setAmount={setAmount} />
      <WalletStatus message={message} total={total} />
    </div>
  );
}

export default WalletRecharge;
