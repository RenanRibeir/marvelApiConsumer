import {Character} from '../models/Character';
import api from '../services/api';

export const handleGet = async (): Promise<Character[] | undefined> => {
  try {
    const response = await api.get('/characters');
    return response.data.data.results;
  } catch (e) {
    console.log(JSON.stringify(e));
  }
};
