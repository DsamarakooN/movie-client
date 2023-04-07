import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8070/',
    headers: {"Access-Control-Allow-Origin": "true"}
});