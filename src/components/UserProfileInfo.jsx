import React from 'react';
import WalletRecharge from './WalletRecharge';

const UserProfileInfo = ({ user, onStartEditing }) => (
  <div>
    <h2>{user.name || "Не указано"}</h2>
    <p>Email: {user.email || "Не указано"}</p>
    <p>Местоположение: {user.location || "Не указано"}</p>
    <p>На сайте с: {user.joinDate}</p>
    <button className="btn btn-info" onClick={onStartEditing}>Редактировать</button>
    <WalletRecharge />
  </div>
);

export default UserProfileInfo;
