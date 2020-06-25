import axios from 'axios'
import api from './api.js'

const ins = axios.create()

ins.interceptors.request.use(
  config => {
    config.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    config.headers['Content-Type'] = 'application/json'
    config.headers.Accept = '*/*'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
ins.interceptors.response.use(
  response => {
    console.log(response)
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

class https {
  static async get (apiName, params) {
    return await ins.get(api[apiName], { params })
  }

  static async post (apiName, params) {
    return await ins.post(api[apiName], params)
  }
}

export default https
