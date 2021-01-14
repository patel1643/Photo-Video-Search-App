import axios from 'axios';

const access_token = '563492ad6f91700001000001c5f0fdbccfbc4f36bde43e2f95914b76'
const instance = axios.create({
    baseURL : 'https://api.pexels.com/v1/search?query=',
    headers:{
        'Authorizarion': `${access_token}`
    }
})

export default instance;

