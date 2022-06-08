import axios from 'axios';

export const server = 'https://supplychain60.herokuapp.com';

const instance = axios.create({
  baseURL: server,
});

export default instance;