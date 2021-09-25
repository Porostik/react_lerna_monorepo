import React from 'react';

export const List = ({ list }) => (
  <div className="list">
    {list.map((_item, idx) => (
      <div className="list-item" key={idx} />
    ))}
  </div>
);
