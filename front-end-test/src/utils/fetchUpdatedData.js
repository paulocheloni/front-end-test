import url from '../methods/url';

async function fetchUpdatedData(setData, shouldUpdate) {
  if (shouldUpdate) {
    const apiData = await fetch(url);
    const jsondata = await apiData.json();
    // eslint-disable-next-line no-underscore-dangle
    const modifiedData = jsondata.map((row) => ({ ...row, id: row._id }));
    setData(modifiedData);
  }
}

export default fetchUpdatedData;
