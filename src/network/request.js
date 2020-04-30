import axios from 'axios'
// const BASEURL=process.env.NODE_ENV==='production'? '': '/api'
export function request(config) {
  //创建axios实例
  const instance=axios.create({
    baseURL:'/api',
    timeout:5000,
  })
  //拦截器
  //请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  },err=>{

  })

  //响应拦截
  instance.interceptors.response.use(res =>{
    return res.data
  },err =>{
    console.log(err)
  })

  //发送正真的网络请求
  return instance(config)

}
