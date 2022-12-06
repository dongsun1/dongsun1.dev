import Axios from 'axios';

const dev = process.env.NODE_ENV !== 'production';

const axios = Axios.create({
  baseURL: dev ? 'http://localhost:3000' : 'https://dongsun1-dev.vercel.app',
});

export default axios;
