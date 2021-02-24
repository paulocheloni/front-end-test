import url from './url';

async function getItemById(id) {
  const data = await ((await fetch(`${url}/${id}`)).json());
  return data;
}

export default getItemById;
