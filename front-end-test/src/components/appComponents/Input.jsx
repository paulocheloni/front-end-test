import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

function Input(props) {
  const {
    name, label, value, onChange, fullWidth,
  } = props;
  return (
    <>
      <TextField
        id={name}
        label={label}
        value={value}
        onChange={onChange}
        onFocus={(e) => e.target.select()}
        variant="outlined"
        fullWidth={fullWidth}

      />
    </>
  );
}

Input.defaultProps = {
  label: 'campo',
  value: '',
  fullWidth: false,
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
};

export default Input;
