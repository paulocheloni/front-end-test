async function getAllItems(url) {
  const data = await ((await fetch(url)).json());
  return data;
}

export default getAllItems;
