import React from 'react';

export const TextInput = ({ type = 'text', className, name, value, onChange, errors = []}) => {
  const cssString = errors.length > 0 ? className + " errors" : className;
  return (
    <div>
      <input
        type={type}
        className={cssString}
        placeholder={name}
        value={value}
        onChange={onChange}
      />
      { errors.map((err, i) => <div className="list-errors" key={i}>{err}</div>) }
    </div>
  )
};
