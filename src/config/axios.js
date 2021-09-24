import axios from 'axios'

const urlAxios = axios.create({
    baseURL:process.env.REACT_APP_BACKEND_URL
})

export default urlAxios
