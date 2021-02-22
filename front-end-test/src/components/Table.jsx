import React, { useContext } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import sharedContext from '../context/sharedcontext';
import tableConfig from './appComponents/tableConfig';
import Loading from './appComponents/Loading';
import './Table.css';
// import editItem from '../lib/editItem';
import deleteItem from '../lib/deleteItem';
import SelectButton from './appComponents/SelectButton';
import DeleteButton from './appComponents/DeleteButton';

const renderSelect = {
  field: 'renderSelect',
  headerName: 'Select',
  width: 100,
};

const renderDelete = {
  field: 'renderDelete',
  headerName: 'Delete',
  width: 100,

};

export default function Table() {
  const { data, setFormData, setId } = useContext(sharedContext);
  if (data.length === 0) return <Loading />;

  return (
    <div className="tableContainer">
      <DataGrid
        rows={[...data]}
        columns={[...tableConfig,
          {
            ...renderDelete,
            renderCell: (params) => (
              <DeleteButton
                id={params.getValue('id')}
                handleDelete={deleteItem}
              />
            ),
          },
          {
            ...renderSelect,
            renderCell: (params) => (
              <SelectButton
                id={params.getValue('id')}
                setId={setId}
              />
            ),
          },
        ]}
        checkBoxSelection
      />

    </div>

  );
}
