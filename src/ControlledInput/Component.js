import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ControlledInput({
  callback = () => { },
  type = 'text',
  name = '',
  disabled = false,
  readOnly = false,
  defaultValue,
  placeholder = '',
}) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    callback(value);
  }, [value]);

  return (
    <input
      type={type}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={({ target: { value } }) => setValue(value)}
    />
  );
}

ControlledInput.propTypes = {
  callback: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
