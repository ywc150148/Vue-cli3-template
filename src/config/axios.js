    // 引用axios和qs
    const http = require('Axios')
    // const qs = require('Qs');
    // import Vue from 'vue'
    // import VueEvent from "./VueEvent.js";

    const axios = http.create({
      //超时设置
      timeout: 20000,
      //请求头设置
      headers: {
        "accept": "application/json",
      }
    })

    // 设置 get，post、put 默认 Content-Type
    axios.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

    //axios 请求拦截
    axios.interceptors.request.use((config) => {

      // 设置授权认证：token
      // let token = localStorage.getItem('token');
      // config.headers.Authorization = token;

      if (config.method == "post" || config.method == "put") {
        config.data = Qs.stringify(config.data);
      }

      return config;

    }, error => {
      return Promise.reject(error);
    });

    // axios 响应拦截器
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      error => {
        // 返回响应数据！
        return Promise.reject(error.response)
      }
    );

    export default axios
