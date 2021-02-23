import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const handleDelete = async (deleteItem, id, setShouldUpdate) => {
  await deleteItem(id);
  setShouldUpdate(true);
};

const DeleteButton = ({ deleteItem, id, setShouldUpdate }) => (
  <Button
    variant="contained"
    color="primary"
    size="small"
    onClick={() => handleDelete(deleteItem, id, setShouldUpdate)}
    style={{ marginLeft: 16 }}
  >
    Delete
  </Button>
);

DeleteButton.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  setShouldUpdate: PropTypes.func.isRequired,
};

export default DeleteButton;
