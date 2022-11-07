import request from '@/utils/request'

// 登录接口
export const loginAPI = (data) => request({
  url: '/sys/login',
  method: 'POST',
  data: data
})

// 用户基本信息获取
export const getUserInfoAPI = () => request({
  url: '/sys/profile',
  method: 'POST'
})
