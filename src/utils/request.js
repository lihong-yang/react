import axios from 'axios';

console.log('环境', process.env.NODE_ENV)
// development开发 test测试  production生产
let env = 'production';
let baseUrl = '';
if (env === 'development') {
  baseUrl = '待配置';
} else if (env === 'test') {
  baseUrl = '待配置';
} else if (env === 'production') {
  baseUrl = 'http://huruqing.cn:3002';
}


const service = axios.create({
  // api 的 base_url
  baseURL: baseUrl,
  timeout: 50000 // 请求超时时间(因为需要调试后台,所以设置得比较大)
})

let token = localStorage.getItem('token')
// request拦截器(请求前的处理)
service.interceptors.request.use(
  config => {
    if (token) {
      config.headers['x-lc-session'] = localStorage.getItem('token') // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response 拦截器(数据返回后的处理)
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code == 666) {
      return response.data
    } else if (res.code === 603) {
      // 跳转到登陆页面
    } else {
      return Promise.reject('error')
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

const get = (url, data) => {
  return service.get(url, {
    params: data
  });
}

const post = (url, data) => {
  return service.post(url, data);
}

export default {
  get,
  post
}