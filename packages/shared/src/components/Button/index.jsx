// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useMemo } from 'react';

export const Button = ({ children, onClick }) => {
  const a = useMemo(() => {}, []);

  return (
    <button type="button" onClick={onClick}>
      {children}
      {a}
    </button>
  );
};
