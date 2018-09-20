import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://stage.vcs.resh.edu.ru/api',
    headers: {
        'Content-Type': 'application/json',
    }
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;