import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import Cookies from 'js-cookie'
Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    tocken: '',
    current_page: {},
    showSelectMusic: false,
    captcha: false,
    user: {
    	nickName: '章子怡'
    },
    isLogin: false,
    isValidated: false,
    svgCode: '',
    route: '',
    song: {
    	
    }
  },
  mutations: {
		validate (state,status) {
			state.isValidated = status;
		},
		login (state, user) {
			state.user = user;
		},
		toggleSelectMusic (state,status) {
			state.showSelectMusic = status;
		},
		playSong (state, song) {
			Object.assign(state.song,song);
		},
		captcha (state, status) {
			state.captcha = status;
		},
		update_code (state,code) {
			state.svgCode = code;
		},
		update_route (state, route){
			state.route = route;
		}
  },
  actions: {
  	login ({commit,dispatch},playload) {
				return new Promise((resolve,reject)=>{
		  		axios.post('/public/user_login',playload).then(res=>{
		  			if(res.code === 200){
		  				resolve(res);
		  				commit('login',res.data);
		  				Cookies.set('tuch_client_session_user',JSON.stringify(res.data))
		  			}else{
		  				if(res.captcha){
		  					dispatch('getCode');
		  					commit('captcha',true);
		  				}
		  				reject(res.msg);
		  			}
		  		}).catch(e=>{
		  			reject('登录失败');
		  		})
				})
  	},
  	register ({commit,dispatch},playload) {
  		
  	},
  	getCode ({commit}) {
				axios.post('/public/get_capatcha').then(res=>{
					commit('update_code',res.img)
				})	  		
  	},
  	loginout ({commit}) {
  			axios.post("/public/user_destory").then(res=>{
  				commit('login',{});
  				Cookies.remove('tuch_client_session_user');
  			});
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