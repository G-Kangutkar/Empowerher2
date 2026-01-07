import axios from 'axios'
const api = axios.create({
    baseURL:'https://todomanager-33435-default-rtdb.asia-southeast1.firebasedatabase.app'
});
export default api;