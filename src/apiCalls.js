export const houseDataRequest = async (url) => {
  const response = await fetch(url);
  const houses = await response.json();
  return houses;

    
};


export const houseDataRequestAlternate = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      throw error;
    });
};