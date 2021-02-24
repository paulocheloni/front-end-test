import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const handleClick = (id, selectItem, setEditing) => {
  selectItem(id);
  setEditing(true);
};

const SelectButton = ({ id, selectItem, setEditing }) => (
  <Button
    variant="contained"
    color="primary"
    size="small"
    onClick={() => handleClick(id, selectItem, setEditing)}
    style={{ marginLeft: 16 }}
  >
    Select
  </Button>
);

SelectButton.propTypes = {
  selectItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  setEditing: PropTypes.func.isRequired,
};

export default SelectButton;
