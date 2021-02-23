const tableConfig = [
  {
    field: '_id', headerName: '_id', hide: true, width: 0,
  },
  { field: 'clientName', headerName: 'Client Name', flex: 1 },
  { field: 'productName', headerName: 'Product Name', flex: 1 },
  {
    field: 'price', headerName: 'Price', type: 'number', width: 100,
  },
  {
    field: 'quantity', headerName: 'Quantity', type: 'number', flex: 0.6,
  },

];

export default tableConfig;
