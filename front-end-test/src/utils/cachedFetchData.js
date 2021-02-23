import getItemById from '../methods/getItemById';

async function cachedFetchData(cache, setData, id) {
  const jsonData = await getItemById(id);
  // eslint-disable-next-line no-underscore-dangle
  const modifiedData = { ...jsonData, id: jsonData._id };
  setData(modifiedData);
}

export default cachedFetchData;
