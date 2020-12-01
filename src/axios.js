import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://whatsapp3344.herokuapp.com'
})

export default instance;