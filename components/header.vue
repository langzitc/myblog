<template>
		<div class="header-wrap">
				<el-header style="height:41px;line-height:41px;width:100%">
						<el-row>
							<el-col :xs="{span:12}" :sm="12" :md="8" :lg="4">
									<div class="logo">
										<img src="../static/TB1BQh7LpXXXXcJXFXXXXXXXXXX-198-46.gif" alt="">
										<div class="logo-text">
											<span class="text">
												TUCH
											</span>
										</div>
									</div>
									<div class="head-music">
										<el-button @click="toggleSelectMusic" type="text" icon="ion-headphone"></el-button>
										<div class="head-music-title-wrap">
											<span class="head-music-title">{{song.songinfo ? song.songinfo.author : ''}}-{{song.songinfo ? song.songinfo.album_title : ''}}</span>
										</div>
										<!--<el-button class="play-icon" type="text" icon="ion-ios-play"></el-button>-->
										<div class="play-icon playing">
											<div class="play paly1"></div>
											<div class="play paly2"></div>
											<div class="play paly3"></div>
											<div class="play paly4"></div>
											<div class="play paly5"></div>
										</div>
										<div class="select-music-plane" :class="showSelectMusic ? 'show' : 'hide'">
											<music-plane @playing="toggleSelectMusic"></music-plane>										
										</div>
									</div>									
							</el-col>
							<el-col :xs="{span:12}" :sm="12" class="text-right hidden-md-and-up">
									<i class="el-icon-menu head-nav-menu"></i>
							</el-col>
							<el-col :md="16" :lg="20"  class="text-right hidden-sm-and-down">
									<nav class="header-nav-list">
											<li class="header-nav-list-item active"><a href="/">首页</a></li>
											<li class="header-nav-list-item"><a href="/articlelist">资讯</a></li>
											<li class="header-nav-list-item"><a href="/idea">作品</a></li>
											<li class="header-nav-list-item"><a href="/talk">说说</a></li>
											<li class="header-nav-list-item"><a href="https://www.54tuchun.com">社区</a></li>
											<li class="header-nav-list-item"><a href="/personal">关于我</a></li>
											<li class="header-nav-list-item"><a href="/message">留言</a></li>
									</nav>
									<el-button v-if="!user.id" type="primary" size="mini" @click="showLogin = true">登录</el-button>
									<el-button v-if="!user.id" type="ghost" size="mini" @click="register">注册</el-button>
									<el-dropdown v-if="user.id" @command="handlerDropDown">
									  <span class="el-dropdown-link" style="color: #fff;outline: none;border: none;">
									    {{user.nick||user.tel}}<i class="el-icon-arrow-down el-icon--right"></i>
									  </span>
									  <el-dropdown-menu slot="dropdown">
									    <el-dropdown-item command="center">个人中心</el-dropdown-item>
									    <el-dropdown-item command="quit">退出</el-dropdown-item>
									  </el-dropdown-menu>
									</el-dropdown>									
									<el-dialog
										title=""
										:append-to-body="true"
										:close-on-click-modal="false"
										:visible.sync="showLogin"
										width="400px"
										center>
										<el-form  :model="loginForm" :rules="loginRules" ref="loginForm">
												<el-form-item prop="username">
													<el-input v-model="loginForm.username" prefix-icon="el-icon-mobile-phone" placeholder="手机号|邮箱"></el-input>
												</el-form-item>
												<el-form-item prop="password">
													<el-input v-model="loginForm.password" prefix-icon="el-icon-view" placeholder="密码" type="password"></el-input>
												</el-form-item>	
												<el-form-item prop="captcha_code" v-if="captcha">
													<el-input v-model="loginForm.captcha_code" placeholder="验证码" style="width:80%">
															<div slot="append" style="width:100px;height:30px" v-html="svgCode">
																
															</div>
													</el-input>
													<a href="#" style="margin-left:15px" @click="getCode">换一张</a>
												</el-form-item>																																				
												<el-form-item>
														<el-row>
															<el-col :span="12">
																	<el-switch
																		v-model="isRemember"
																		active-color="#13ce66"
																		active-text="记住密码"
																		inactive-color="#ff4949">
																	</el-switch>	
															</el-col>
															<el-col :span="12" class="text-right">
																	<a href="#">立即注册</a>
															</el-col>
														</el-row>
												</el-form-item>												
										</el-form>
										<span slot="footer" class="dialog-footer">
											<el-button type="primary" :loading="btnLoading" style="width:100%" @click="submit">确 定</el-button>
										</span>
									</el-dialog>									
							</el-col>
						</el-row>
				</el-header>
				<div class="banner">
						<div class="banner-item" :class="index === 0 ? 'active' : ''">
							<img src="../static/319010.jpg"/>
						</div>
						<div class="banner-item" :class="index === 1 ? 'active' : ''">
							<img src="../static/262345.jpg"/>
						</div>
						<div class="banner-item" :class="index === 2 ? 'active' : ''">
							<img src="../static/318724.jpg"/>
						</div>
						<div class="banner-item" :class="index === 3 ? 'active' : ''">
							<img src="../static/317952.jpg"/>
						</div>
				</div>	
				<el-row>
						<el-col :span="24" class="text-center" style="margin-top:20px">
							<span style="color:#fff;font-size: 24px;">个人承接项目</span>
						</el-col>
						<el-col :xs="{span:12}" :sm="{span:12}" :md="{span:6}" :lg="{span: 5,offset:1}">
									<div class="bt-wrap">
										<div class="bt-wrap-left">
												<i class="ion-ipad bt-icon"></i>
										</div>
										<div class="bt-wrap-right">
											<p>APP</p>
											<p>小程序、微信开发</p>
										</div>
									</div>								
						</el-col>
						<el-col :xs="{span:12}" :sm="{span:12}" :md="{span:6}" :lg="{span: 5,offset:1}">
									<div class="bt-wrap">
										<div class="bt-wrap-left">
												<i class="ion-aperture bt-icon"></i>
										</div>
										<div class="bt-wrap-right">
											<p>企业官网</p>
											<p>pc、移动网站</p>
										</div>
									</div>								
						</el-col>
						<el-col :xs="{span:12}" :sm="{span:12}" :md="{span:6}" :lg="{span: 5,offset:1}">
									<div class="bt-wrap">
										<div class="bt-wrap-left">
												<i class="ion-android-desktop bt-icon"></i>
										</div>
										<div class="bt-wrap-right">
											<p>客户端</p>
											<p>兼容windows、Mac、Linux</p>
										</div>
									</div>								
						</el-col>
						<el-col :xs="{span:12}" :sm="{span:12}" :md="{span:6}" :lg="{span: 5,offset:1}">
									<div class="bt-wrap">
										<div class="bt-wrap-left">
												<i class="ion-android-laptop bt-icon"></i>
										</div>
										<div class="bt-wrap-right">
											<p>Sass系统</p>
											<p>数据挖掘，数据分析</p>
										</div>
									</div>								
						</el-col>
				</el-row>	
		</div>
</template>

<script>
	import {mapState} from 'vuex'
	import MusicPlane from './MusicPlane'
	let scroll = null;
	export default {
		name: 'page-header',
		data () {
			return {
				index: 0,
				showLogin: false,
				isRemember: true,
				btnLoading: false,
				loginForm: {
					username: '',
					password: '',
					captcha_code: ''
				},
				loginRules: {
					username: [{
						required: true,
						message: '请输入手机号或邮箱',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}],
					captcha_code: [{
						required: true,
						message: '请输入验证码',
						trigger: 'blur'
					}]					
				}
			}
		},
		methods: {
			register () {
				this.$router.push({
					path: '/register'
				});
			},
			getCode () {
				this.$store.dispatch("getCode")			
			},			
			toggleSelectMusic () {
				this.$store.commit('toggleSelectMusic',!this.showSelectMusic);
			},
			submit () {
		        this.$refs['loginForm'].validate((valid) => {
		          if (valid){
						this.btnLoading = true;
						this.$store.dispatch("login",this.loginForm).then(res=>{
							this.btnLoading = false;
							this.showLogin = false;
						}).catch(msg=>{
							this.$message({
								type: 'error',
								message: msg
							});
							this.btnLoading = false;
						})		          	
		          }
		        });				
			},
			handlerDropDown (command) {
				switch (command) {
					case 'center':
						this.$router.push({
							path: '/personal'
						});
					break;
					case 'quit': 
						this.$store.dispatch('loginout');
					break;
				}
			}
		},
		mounted () {
			setInterval(()=>{
				if(this.index===3){
					this.index = 0;
				}else{
					this.index++;
				}
			},10000);
		},
		computed: {
			...mapState({
				showSelectMusic: state => state.showSelectMusic,
				song: state => state.song,
				captcha: state => state.captcha,
				svgCode: state => state.svgCode,
				user: state => state.user
			})
		},
		components: {
			MusicPlane
		}
	}
</script>

<style>

</style>