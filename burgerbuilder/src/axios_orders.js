import axios from 'axios';

const instance=axios.create({
    baseURL: 'https://react-burger-f13e3.firebaseio.com/'
});

export default instance;