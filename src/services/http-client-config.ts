import axios from 'axios';

export const HTTP_CLIENT = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});
