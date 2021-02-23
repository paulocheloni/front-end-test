import url from './url';

async function editItem(id, newData) {
  const response = await fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',

    },

    body: JSON.stringify(newData),
  });
  return response;
}

export default editItem;
