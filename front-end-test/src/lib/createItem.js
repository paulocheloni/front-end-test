async function createItem(data, rootUrl) {
  const response = await fetch(`${rootUrl}/createItem`, {
    method: 'POST',
    headers: {
      contentType: 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
}

export default createItem;
