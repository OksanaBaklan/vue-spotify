// src/api/spotifyService.js
const BASE_URL = 'https://spotify-web2.p.rapidapi.com';

export const getPlaylistTracks = async () => {
  const url = `${BASE_URL}/albums/?ids=3IBcauSj5M2A6lTeffJzdv`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '658b44a0ecmsh204732296c3beecp1cfbfbjsnd506dd50da8c',
      'X-RapidAPI-Host': 'spotify-web2.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching playlist tracks:', error.message);
    throw error;
  }
};
