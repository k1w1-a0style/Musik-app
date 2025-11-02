import { fetch } from 'expo-fetch';
export default {
  getMusic: async () => {
    const response = await fetch('https://example.com/music');
    return response.json();
  }
};