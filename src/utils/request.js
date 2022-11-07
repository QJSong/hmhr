import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'

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
    // 发送请求时 拼接上请求头 带上token
    const token = store.getters.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  response => {
    // console.log(response)
    // response 是响应对象
    const { success, message } = response.data
    if (success) {
      // 为了代码的简单 少写一个data 这里返回时多一个.data
      return response.data
    } else {
      Message.error(message)
      // await 无法接收 Promise.reject 拒绝的状态 所以有try catch 就是进
      return Promise.reject(message)
    }
  },
  error => {
    // 如果报错 4xx 或 5xx
    // 使用 && 是为了防止 null.data 报错
    Message.error((error.response && error.response.data && error.response.data.message) || error.message)
    return Promise.reject(error)
  }
)

export default service
