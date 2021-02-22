import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

function Input(props) {
  const { name, label } = props;
  const [field, setField] = useState();
  return (
    <>
      <TextField
        id={name}
        label={label}
        value={field}
        onChange={(e) => setField(e.target.value)}
        onFocus={(e) => e.target.select()}
        variant="outlined"
      />
    </>
  );
}

Input.defaultProps = {
  label: 'campo',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Input;
