import React from 'react';

import './userList.scss';

export const UsersList = ({ list, loading }) => {
  if (loading) return <h1>Loading</h1>;

  return (
    <div className="users-list">
      {list.map((item, idx) => (
        <div className="users-list__item" key={idx}>
          <div className="users-list__item-id">{item.id}</div>
          <div className="users-list__item-name">{item.name}</div>
        </div>
      ))}
    </div>
  );
};
