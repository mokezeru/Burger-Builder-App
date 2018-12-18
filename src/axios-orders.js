import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-68c6c.firebaseio.com/'
});

export default instance;