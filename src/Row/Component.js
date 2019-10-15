import React from 'react';
import PropTypes from 'prop-types';

export default function Row({
  label,
  children
}) {
  const formControlStyles = {
    marginBottom: '1rem',
  };

  const labelStyles = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '.25rem',
  }

  return (
    <div style={formControlStyles}>
      <label style={labelStyles} htmlFor={label}>
        {label}
      </label>
      {children}
    </div>
  );
}

Row.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};