import url from './url';

async function deleteItem(id) {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',

  });
  return response;
}

export default deleteItem;
