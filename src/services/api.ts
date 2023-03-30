import { HTTP_CLIENT } from './http-client-config';

async function getCharacters() {
  try {
    const response = await HTTP_CLIENT.get('/character?page=2');

    return response.data;
  } catch (e) {
    throw new Error('Error');
  }
}

export const api = {
  getCharacters,
};
