import axios from 'axios';

const BASE_URL = 'https://api.magicthegathering.io/';
const mtg = require('mtgsdk');

const magicCards = {
  getAllSets: async () => {
    const URL = `${BASE_URL}v1/sets`;
    try {
      const res = await axios.get(URL);
      return res.data.sets;
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  },
  getCardsFromSet: async (set) => {
    try {
      const res = await mtg.card.where({ set });
      return res;
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  }
};
export default magicCards;

