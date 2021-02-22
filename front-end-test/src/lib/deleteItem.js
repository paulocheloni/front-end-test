async function deleteItem(url, id) {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',

    },

  });
  return response;
}

export default deleteItem;
