import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.1.9:3333'
  baseURL: 'http://46-nap.renatojfsantos.mobile.exp.direct:3333'
});

export default api;