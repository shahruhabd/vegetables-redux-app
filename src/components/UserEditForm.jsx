import React from 'react';

const UserEditForm = ({ user, onSave, onChange, onCancel }) => (
  <form onSubmit={onSave} className='d-flex flex-column gap-3'>
    <div className="form-group">
      <label>Имя:</label>
      <input type="text" className="form-control" name="name" value={user.name} onChange={onChange} />
    </div>
    <div className="form-group">
      <label>Email:</label>
      <input type="email" className="form-control" name="email" value={user.email} onChange={onChange} />
    </div>
    <div className="form-group">
      <label>Местоположение:</label>
      <input type="text" className="form-control" name="location" value={user.location} onChange={onChange} />
    </div>
    <button type="submit" className="btn btn-primary mr-2">Сохранить изменения</button>
    <button type="button" className="btn btn-secondary" onClick={onCancel}>Отмена</button>
  </form>
);

export default UserEditForm;