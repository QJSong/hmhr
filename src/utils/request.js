import axios from 'axios'

// create an axios instance
const service = axios.create({
  // 基地址
  baseURL: process.env.VUE_APP_BASE_API,
  // 响应超时
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
