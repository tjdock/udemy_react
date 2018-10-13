import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-xn.firebaseio.com/'
});

export default instance;
