import url from './url';

async function getAllItems() {
  const data = await ((await fetch(url)).json());
  return data;
}

export default getAllItems;
