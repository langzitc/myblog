import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import qs from 'qs'
axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.transformRequest = (data)=>{
  if(data){
    return  qs.stringify(data);
  }
  return;
}
axios.interceptors.response.use(function(response){
	  return response.data;
},function(error){
    return Promise.reject(error);
});
axios.defaults.headers = {
	'Content-type': 'application/x-www-form-urlencoded'
}
Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    tocken: '',
    current_page: {},
    showSelectMusic: false,
    user: {
    	nickName: '章子怡'
    },
    isLogin: false,
    isValidated: false,
    song: {
    	
    }
  },
  mutations: {
		validate (state,status) {
			state.isValidated = status;
		},
		login (state, user) {
			Object.assign(state.user,user);
		},
		toggleSelectMusic (state,status) {
			state.showSelectMusic = status;
		},
		playSong (state, song) {
			Object.assign(state.song,song);
		}
  },
  actions: {
  	login ({commit,dispatch},playload) {
				return new Promise((resolve,reject)=>{
		  		axios.post('/public/login',playload).then(res=>{
		  			if(res.code === 200){
		  				resolve(res);
		  				commit('login',res.data);
		  			}else{
		  				reject(res.msg);
		  			}
		  		}).catch(e=>{
		  			reject('登录失败');
		  		})
				})
  	},
  	register ({commit,dispatch},playload) {
  		
  	},
  	getMusic ({commit,dispatch},payload) {
  			let params = {
		  			method: 'baidu.ting.billboard.billList',
		  			type: 1,
		  			offset: 0,
		  			size: 10  				
  			}
  			Object.assign(params,payload);
				return new Promise((resolve,reject)=>{
		  		axios.post('/public/search_song',params).then(res=>{
		  			resolve(res);
		  		}).catch(e=>{
		  			throw new Error(e)
		  		})
				})
  	}
  }
})

export default store