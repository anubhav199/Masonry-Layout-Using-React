import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
    key: K7XNMLaZnRsC7bL2_OmdrYhGZzadtkLDuJPZF6TckGQ,
    content_filter: high,
  },
});

export default API;
