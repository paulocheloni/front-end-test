import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UseFetch from '../effects/useFetch';
import sharedContext from './sharedcontext';
import UseFetchWithId from '../effects/useFetchWithId';

const url = 'https://crudcrud.com/api/db011b2e5ee0467a90628ca91dd16c30/pedido';

function Context({ children }) {
  const { data, status } = UseFetch(url);

  const { formData, formStatus, setId } = UseFetchWithId(url);

  return (
    <sharedContext.Provider value={{
      data, status, formData, setId, formStatus,
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
