import React, { useState } from 'react';
import UserEditForm from '../../components/UserEditForm';
import UserProfileInfo from '../../components/UserProfileInfo';

const ProfilePage = () => {
  const [user, setUser] = useState(() => {
    const savedUserData = localStorage.getItem('userData');
    return savedUserData ? JSON.parse(savedUserData) : {
      name: "",
      email: "",
      location: "",
      joinDate: new Date().toLocaleDateString()
    };
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(user));
    setIsEditing(false);
  };

  const handleCancel = () => setIsEditing(false);
  const handleEdit = () => setIsEditing(true);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Профиль пользователя</h1>
      {isEditing ? (
        <UserEditForm user={user} onSave={handleSave} onChange={handleChange} onCancel={handleCancel} />
      ) : (
        <UserProfileInfo user={user} onStartEditing={handleEdit} />
      )}
    </div>
  );
}

export default ProfilePage;
