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
											<li class="header-nav-list-item active">首页</li>
											<li class="header-nav-list-item">资讯</li>
											<li class="header-nav-list-item">作品</li>
											<li class="header-nav-list-item">说说</li>
											<li class="header-nav-list-item">社区</li>
											<li class="header-nav-list-item">关于我</li>
											<li class="header-nav-list-item">留言</li>
									</nav>
									<el-button type="primary" size="mini" @click="showLogin = true">登录</el-button>
									<el-button type="ghost" size="mini" @click="register">注册</el-button>
									<el-dialog
										title=""
										:append-to-body="true"
										:close-on-click-modal="false"
										:visible.sync="showLogin"
										width="400px"
										center>
										<el-form>
												<el-form-item>
													<el-input prefix-icon="el-icon-mobile-phone" placeholder="手机号|邮箱"></el-input>
												</el-form-item>
												<el-form-item>
													<el-input prefix-icon="el-icon-view" placeholder="密码" type="password"></el-input>
												</el-form-item>	
												<el-form-item>
													<el-input placeholder="验证码" style="width:80%">
															<div slot="append">
																<img width="100px" height="30px" src="../static/logo2.png" alt="">
															</div>
													</el-input>
													<a href="#" style="margin-left:15px">换一张</a>
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
						<div class="banner-item" :class="index === 0 ? 'fadeIn' : 'fadeOut'">1</div>
						<div class="banner-item" :class="index === 1 ? 'fadeIn' : 'fadeOut'">2</div>
						<div class="banner-item" :class="index === 2 ? 'fadeIn' : 'fadeOut'">3</div>
						<div class="banner-item" :class="index === 3 ? 'fadeIn' : 'fadeOut'">4</div>
				</div>	
				<el-row>
						<el-col :xs="{span:12}" :sm="{span:12}" :md="{span:5,offset:1}" :lg="{span: 4,offset:2}">
									<div class="bt-wrap">
										<div class="bt-wrap-left">
												<i class="el-icon-info bt-icon"></i>
										</div>
										<div class="bt-wrap-right">
											<p>是的时间看看</p>
											<p>手机打开即可</p>
										</div>
									</div>								
						</el-col>
						<el-col :xs="{span:12}" :sm="{span:12}" :md="{span:5,offset:1}" :lg="{span: 4,offset:2}">
									<div class="bt-wrap">
										<div class="bt-wrap-left">
												<i class="el-icon-info bt-icon"></i>
										</div>
										<div class="bt-wrap-right">
											<p>是的时间看看</p>
											<p>手机打开即可</p>
										</div>
									</div>								
						</el-col>
						<el-col :xs="{span:12}" :sm="{span:12}" :md="{span:5,offset:1}" :lg="{span: 4,offset:2}">
									<div class="bt-wrap">
										<div class="bt-wrap-left">
												<i class="el-icon-info bt-icon"></i>
										</div>
										<div class="bt-wrap-right">
											<p>是的时间看看</p>
											<p>手机打开即可</p>
										</div>
									</div>								
						</el-col>
						<el-col :xs="{span:12}" :sm="{span:12}" :md="{span:5,offset:1}" :lg="{span: 4,offset:2}">
									<div class="bt-wrap">
										<div class="bt-wrap-left">
												<i class="el-icon-info bt-icon"></i>
										</div>
										<div class="bt-wrap-right">
											<p>是的时间看看</p>
											<p>手机打开即可</p>
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
				btnLoading: false
			}
		},
		methods: {
			register () {
				this.$router.push({
					path: '/register'
				});
			},
			toggleSelectMusic () {
				this.$store.commit('toggleSelectMusic',!this.showSelectMusic);
			},
			submit () {
				this.btnLoading = true;
			}
		},
		computed: {
			...mapState({
				showSelectMusic: state => state.showSelectMusic,
				song: state => state.song
			})
		},
		components: {
			MusicPlane
		}
	}
</script>

<style>

</style>