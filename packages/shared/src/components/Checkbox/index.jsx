import React from 'react';

export const Checkbox = ({ label, name }) => (
  <label htmlFor={name}>
    <input name={name} type="checkbox" />
    {label}
  </label>
);
