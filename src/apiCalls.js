export const houseDataRequest = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};


export const houseDataRequestAlternate = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      throw error;
    });
};