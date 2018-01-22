import axios from 'axios'
// axios.defaults.baseURL = 'http://47.96.21.88:8888/api/private/v1/'
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'

// 登录拦截器 发送请求之前(发送ajax前)做一些事
axios.interceptors.request.use(function (config) {
  // 获取当前是否存在token
  let token = localStorage.getItem('mytoken')
  if (token) {
    // Authorization是请求头的键,是前后台约定的 config配置参数 通过请求header中的Authorization参数配置
    config.headers['Authorization'] = token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 实现登录功能
export const login = (params) => {
  return axios.post('login', params).then(res => {
    return res.data
  })
}

// 测试请求头
export const testData = (params) => {
  return axios.get('user', {params: params}).then(res => {
    return res.data
  })
}
