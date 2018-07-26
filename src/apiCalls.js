export const houseDataRequest = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error){
    Error('Sorry, no hosue data at this time');
  }
};