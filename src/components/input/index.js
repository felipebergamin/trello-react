import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div className="form-group">
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <small className="error-message">{error}</small>}
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
};
