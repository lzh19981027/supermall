import axios from "axios";

export function request(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2. axios的拦截器

  // 2.1 请求拦截器的作用
  instance.interceptors.request.use(
    config => {
      return config

    },
    error => {
      // console.log(error);
    })

  // 2.2 响应拦截
  instance.interceptors.response.use(
    res => {
      // console.log(res);
      return res.data
    },
    error => {
      console.log(error);
    }
  )

  // 3. 发送真正的网络请求，返回Promise
  return instance(config)

}
