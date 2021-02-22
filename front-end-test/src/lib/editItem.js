async function editItem(url, id, newData) {
  const response = await fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',

    },

    body: JSON.stringify(newData),
  });
  return response;
}

export default editItem;
