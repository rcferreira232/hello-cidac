import axios from 'axios'

console.log(process.env.VITE_BASE_URL)

const api = axios.create({
  //env variable
  baseURL: process.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
