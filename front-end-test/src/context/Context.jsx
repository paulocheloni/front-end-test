import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import sharedContext from './sharedcontext';

function Context({ children }) {
  const [id, setId] = useState('');
  const [editing, setEditing] = useState(false);
  const [updateTable, setUpdateTable] = useState(true);

  useEffect(() => {
    if (!editing) setId('');
  }, [editing]);

  return (
    <sharedContext.Provider value={{
      setId, id, setEditing, editing, updateTable, setUpdateTable,
    }}
    >
      {children}
    </sharedContext.Provider>
  );
}

Context.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Context;
