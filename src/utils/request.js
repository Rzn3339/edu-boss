import axios from "axios";

// create 创建 axios 实例
const request = axios.create({
  timeout: 5000,
  // baseURL:
  // headers:
});

function getBaseURL(URL) {
  if (URL.startsWith("./boss")) {
    return "http://eduboss.lagou.com";
  } else {
    return "http://edufront.lagou.com";
  }
}

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 判断 config.url 的前缀，来进行请求 baseURL 的设置
  config.baseURL = getBaseURL(config.url);

  return config;
});

export default request;
