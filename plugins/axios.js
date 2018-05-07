import Vue from 'vue'
import qs from 'qs'
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.transformRequest = (data)=>{
  if(data){
    return  qs.stringify(data);
  }
  return;
}
axios.headers = {}
axios.defaults.withCredentials = true;
axios.interceptors.response.use(function(response){
	  return response.data;
},function(error){
    return Promise.reject(error);
});
axios.defaults.headers = {
	'Content-type': 'application/x-www-form-urlencoded'
}
Vue.prototype.$http = axios;
