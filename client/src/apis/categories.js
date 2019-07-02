import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:5001/api/admin/categories',
    headers: {
        'Content-Type': 'application/json'
    }
});