import React, { useMemo } from 'react';

import './button.scss';

export const Button = ({ children, onClick }) => {
  const a = useMemo(() => {}, []);

  return (
    <button className="button" type="button" onClick={onClick}>
      {children}
      {a}
    </button>
  );
};
