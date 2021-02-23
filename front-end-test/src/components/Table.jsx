import React, {
  useContext, useEffect, useState,
} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import sharedContext from '../context/sharedcontext';
import tableConfig from './appComponents/tableConfig';
import './Table.css';
// import editItem from '../lib/editItem';
import deleteItem from '../methods/deleteItem';
import SelectButton from './appComponents/SelectButton';
import DeleteButton from './appComponents/DeleteButton';
import cachedFetchTableData from '../utils/fetchUpdatedData';

const renderEdit = {
  field: 'editItem',
  headerName: 'Edit item',
  width: 200,
};

export default function Table() {
  const {
    setId, updateTable, setUpdateTable, setEditing,
  } = useContext(sharedContext);
  const [tableData, setTableData] = useState([]);

  // const { data } = UseFetch(updateTable);

  useEffect(() => {
    cachedFetchTableData(setTableData, updateTable);
  }, [updateTable]);

  useEffect(() => {
    setUpdateTable(false);
  }, [tableData]);

  return (
    <div className="tableContainer">
      <DataGrid
        rows={[...tableData]}
        columns={[...tableConfig,
          {
            ...renderEdit,
            renderCell: (params) => (
              <>
                <SelectButton
                  id={params.row.id}
                  selectItem={setId}
                  setEditing={setEditing}
                />
                <DeleteButton
                  deleteItem={deleteItem}
                  setShouldUpdate={setUpdateTable}
                  id={params.row.id}
                />
              </>
            ),
          },

        ]}
        checkBoxSelection
      />

    </div>

  );
}
