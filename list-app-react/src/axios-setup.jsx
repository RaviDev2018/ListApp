import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://list-app-react.firebaseio.com/'
});

export default instance;