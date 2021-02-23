import editItem from '../methods/editItem';
import createItem from '../methods/createItem';

const handleCreateSubmit = async (setData, setUpdateTable, attributes) => {
  await createItem(attributes);
  setUpdateTable(true);
  setData({
    productName: '',
    clientName: '',
    quantity: '',
    price: '',
  });
};

const handleEditSubmit = async (setEditing, setData, setUpdateTable, formData) => {
  const { id, _id, ...rest } = formData;
  await editItem(id, rest);
  setEditing(false);
  setUpdateTable(true);
  setData({
    productName: '',
    clientName: '',
    quantity: '',
    price: '',
  });
};

const handleSubmit = async (e, setEditing, setData, editing, formData, setUpdateTable) => {
  e.preventDefault();
  const { id, _id, ...attributes } = formData;
  if (editing) {
    await handleEditSubmit(setEditing, setData, setUpdateTable, formData);
  } else {
    await handleCreateSubmit(setData, setUpdateTable, attributes);
  }
};

export default handleSubmit;
