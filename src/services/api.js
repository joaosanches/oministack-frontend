import axios from 'axios'

const api = axios.create({
    baseURL: 'https://projeto-omnistack-backend.herokuapp.com'    
})

export default api
