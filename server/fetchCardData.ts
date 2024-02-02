import fetch from 'node-fetch';

async function fetchCardData() {
  const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards';
  const headers = {
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY', // Replace with your actual RapidAPI key
  };

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching card data:', error);
    throw error;
  }
}

export default fetchCardData;
