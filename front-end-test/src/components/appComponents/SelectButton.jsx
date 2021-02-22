import React from 'react';
import Button from '@material-ui/core/Button';

const SelectButton = (params, handleSelect) => (

  <Button
    variant="contained"
    color="primary"
    size="small"
    onClick={() => handleSelect(params)}
    style={{ marginLeft: 16 }}
  >
    Select
  </Button>
);

export default SelectButton;
