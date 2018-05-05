<template>
	<div class="personal-app-wrap">
	<!--<Header2></Header2>-->
	<div class="jl-box">
		<div class="jl-loading" :class="showLoading ? '' : 'hide'">
			<div class="loader">
				Loading...
			</div>
		</div>
		<div class="jl-wrap">
			<div class="swiper-container">
				<div class="zdy-pagination">
					<div class="zdy-pagination-item">
						<i class="ion-ios-person"></i>
					</div>
					<div class="zdy-pagination-item">
						<i class="ion-aperture"></i>
					</div>
					<div class="zdy-pagination-item">
						<i class="ion-social-nodejs"></i>
					</div>
					<div class="zdy-pagination-item">
						<i class="ion-ios-list"></i>
					</div>
				</div>
			    <div class="swiper-wrapper">
			        <div class="swiper-slide jbxx">
			        	<h5 class="jl-title ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.2s" swiper-animate-delay="0.1s">基本信息</h5>
			        	<el-row :gutter="50">
			        		<el-col :span="12" class="text-right jl-form-label">
			        			<p>姓名:</p>
			        			<p>性别:</p>
			        			<p>出生日期:</p>
			        			<p>参加工作时间:</p>
			        			<p>现居住城市:</p>
			        			<p>户口所在地:</p>
			        			<p>手机:</p>
			        			<p>邮箱:</p>
			        		</el-col>
			        		<el-col :span="12" class="jl-form-value">
			        			<p>屠春</p>
			        			<p>男</p>
			        			<p>1991-07-16</p>
			        			<p>2013-10</p>
			        			<p>成都</p>
			        			<p>四川南充</p>
			        			<p>18782913591</p>
			        			<p>tuchun@54tuchun.com</p>
			        		</el-col>
			        	</el-row>
			        </div>
			        <div class="swiper-slide grjj">
			        	<div class="swiper-slide-inner">
							<h5 class="jl-title">个人简介</h5>	
							<p style="max-width: 800px;margin: 0 auto;text-align: center;">
									软件工程师本科毕业，主修JAVA方向，工作后逐渐转向Web前端开发，5年工作经验，擅长html5,css3,js,nodejs
							</p>
			        	</div>
			        </div>
			        <div class="swiper-slide jsz">
			        	<div class="swiper-slide-inner">
			        		<h5 class="jl-title">编程语言</h5>
							<el-row class="jl-jslist" :gutter="20">
								<el-col :xs="24" :sm="12" :md="{span:6,offset:6}">
									<el-button type="primary" plain>JS</el-button>	
								</el-col>
								<el-col :xs="24" :sm="12" :md="{span:6}">
									<el-button type="primary" plain>css3</el-button>	
								</el-col>	
								<el-col :xs="24" :sm="12" :md="{span:6,offset:6}">
									<el-button type="primary" plain>html5</el-button>	
								</el-col>
								<el-col :xs="24" :sm="12" :md="{span:6}">
									<el-button type="primary" plain>Java</el-button>	
								</el-col>	
								<el-col :xs="24" :sm="12" :md="{span:6,offset:6}">
									<el-button type="primary" plain>PHP</el-button>	
								</el-col>	
								<el-col :xs="24" :sm="12" :md="{span:6}">
									<el-button type="primary" plain>NodeJS</el-button>	
								</el-col>
								<el-col :xs="24" :sm="12" :md="{span:6,offset:6}">
									<el-button type="primary" plain>MySql</el-button>	
								</el-col>	
								<el-col :xs="24" :sm="12" :md="{span:6}">
									<el-button type="primary" plain>Redis</el-button>	
								</el-col>
								<el-col :xs="24" :sm="12" :md="{span:6,offset:6}">
									<el-button type="primary" plain>MongoDB</el-button>	
								</el-col>	
								<el-col :xs="24" :sm="12" :md="{span:6}">
									<el-button type="primary" plain>Linux</el-button>	
								</el-col>	
								<el-col :xs="24" :sm="12" :md="{span:6,offset:6}">
									<el-button type="primary" plain>Less</el-button>	
								</el-col>	
								<el-col :xs="24" :sm="12" :md="{span:6}">
									<el-button type="primary" plain>sass</el-button>	
								</el-col>									
							</el-row>			        		
			        		<h5 class="jl-title">技术栈</h5>
							<el-row class="jl-jslist" :gutter="20">
								<el-col :xs="24" :sm="12" :md="{span:6,offset:6}">
									<el-button type="primary" plain>ES6</el-button>	
								</el-col>
								<el-col :xs="24" :sm="12" :md="{span:6}">
									<el-button type="primary" plain>Webpack</el-button>	
								</el-col>
								<el-col :xs="24" :sm="12" :md="{span:6,offset:6}">
									<el-button type="primary" plain>TypeScript</el-button>	
								</el-col>
								<el-col :xs="24" :sm="12" :md="{span:6}">
									<el-button type="primary" plain>Nuxt.js</el-button>	
								</el-col>									
								<el-col :xs="24" :sm="12" :md="{span:6,offset:6}">
									<el-button type="primary" plain>Vue/Vuex</el-button>	
								</el-col>
								<el-col :xs="24" :sm="12" :md="{span:6}">
									<el-button type="primary" plain>React/Redux/element</el-button>	
								</el-col>
								<el-col :xs="24" :sm="12" :md="{span:6,offset:6}">
									<el-button type="primary" plain>vux/iview/Element</el-button>	
								</el-col>
								<el-col :xs="24" :sm="12" :md="{span:6}">
									<el-button type="primary" plain>React/Redux/AntDesign</el-button>	
								</el-col>								
								<el-col :xs="24" :sm="12" :md="{span:6,offset:6}">
									<el-button type="primary" plain>Jquery</el-button>	
								</el-col>	
								<el-col :xs="24" :sm="12" :md="{span:6}">
									<el-button type="primary" plain>Echart</el-button>	
								</el-col>
								<el-col :xs="24" :sm="12" :md="{span:6,offset:6}">
									<el-button type="primary" plain>ThreeJS</el-button>	
								</el-col>	
								<el-col :xs="24" :sm="12" :md="{span:6}">
									<el-button type="primary" plain>Avalon</el-button>	
								</el-col>	
								<el-col :xs="24" :sm="12" :md="{span:6,offset:6}">
									<el-button type="primary" plain>Java/SSH|/SSM</el-button>	
								</el-col>	
								<el-col :xs="24" :sm="12" :md="{span:6}">
									<el-button type="primary" plain>PHP/PhalApi/Smarty</el-button>	
								</el-col>		
								<el-col :xs="24" :sm="12" :md="{span:6,offset:6}">
									<el-button type="primary" plain>NodeJS/express4/Sequelize/redis</el-button>	
								</el-col>	
								<el-col :xs="24" :sm="12" :md="{span:6}">
									<el-button type="primary" plain>Nodejs/electron</el-button>	
								</el-col>										
							</el-row>
			        	</div>
			        </div>			        
			        <div class="swiper-slide gzjl">
			        	<div class="swiper-slide-inner">
			        		<h5 class="jl-title">工作经历</h5>
							<el-row class="jl-jslist" :gutter="20">
								<el-col :xs="24" :sm="12" :md="{span:8,offset:4}">
									<el-card class="box-card">
									  <el-row slot="header">
									  	<el-col :span="12">
									  		戴氏教育
									  	</el-col>
									  	<el-col :span="12" class="text-right">
											2013/07 -- 2014/05
									  	</el-col>
									  </el-row>
									  <div class="gzjl-list">
									  		<h5 class="card-title2">职责</h5>
									  		<ol>
									  			<li>系统开发</li>
									  			<li>网站搭建</li>
									  			<li>网站维护</li>
									  			<li>服务器管理</li>
									  			<li>网页制作</li>
									  		</ol>
									  </div>								  
									</el-card>									
								</el-col>
								<el-col :xs="24" :sm="12" :md="{span:8}">
									<el-card class="box-card">
									  <el-row slot="header">
									  	<el-col :span="12">
									  		花生米大数据
									  	</el-col>
									  	<el-col :span="12" class="text-right">
											2014/06 -- 2016/10
									  	</el-col>
									  </el-row>
									  <div class="gzjl-list">
									  		<h5 class="card-title2">职责</h5>
									  		<ol>
									  			<li>静态页面，前端交互</li>
									  			<li>前端进度把控</li>
									  			<li>学习新技术并与团队一起提升</li>
									  			<li>项目前端搭建版本迭代</li>
									  			<li>项目研讨分析需求</li>
									  		</ol>
									  </div>								  
									</el-card>									
								</el-col>	
								<el-col :xs="24" :sm="12" :md="{span:8,offset:4}">
									<el-card class="box-card">
									  <el-row slot="header">
									  	<el-col :span="12">
									  		杭州智链达数据有限公司
									  	</el-col>
									  	<el-col :span="12" class="text-right">
											2016/11 -- 2017/09
									  	</el-col>
									  </el-row>
									  <div class="gzjl-list">
									  		<h5 class="card-title2">职责</h5>
									  		<ol>
									  			<li>负责产品的架构及难点处理，和后台工程师制定技术实现方案、接口规范等</li>
									  			<li>负责团队的前端开发质量，保障进度，不断提升效率和产能，追求高性能，高维护性</li>
									  			<li>帮助团队学习提升，关注前端技术发展，并应用于实际开发</li>
									  			<li>常用组件插件封装</li>
									  			<li>配合测试UI产品修复bug</li>
									  			<li>前端代码自动化测试及代码QC</li>
									  		</ol>
									  </div>								  
									</el-card>									
								</el-col>	
								<el-col :xs="24" :sm="12" :md="{span:8}">
									<el-card class="box-card">
									  <el-row slot="header">
									  	<el-col :span="12">
									  		花生米大数据
									  	</el-col>
									  	<el-col :span="12" class="text-right">
											2014/06 -- 2016/10
									  	</el-col>
									  </el-row>
									  <div class="gzjl-list">
									  		<h5 class="card-title2">职责</h5>
									  		<ol>
									  			<li>静态页面，前端交互</li>
									  			<li>前端进度把控</li>
									  			<li>学习新技术并与团队一起提升</li>
									  			<li>项目前端搭建版本迭代</li>
									  			<li>项目研讨分析需求</li>
									  		</ol>
									  </div>								  
									</el-card>									
								</el-col>									
							</el-row>	
			        	</div>
			        </div>
			        <div class="swiper-slide xmjy">
			        	<div class="swiper-slide-inner">
			        		<h5 class="jl-title">项目经验</h5>
			        	</div>
			        </div>	
			        <div class="swiper-slide xqah">
			        	<div class="swiper-slide-inner">
			        		<h5 class="jl-title">兴趣爱好</h5>
			        	</div>
			        </div>				        
			    </div>
			</div>
		</div>
	</div>  		
	</div>
</template>
<script>
export default {
    name: 'personal',
	data () {
		return {
			activeName: '',
			keywords: 'web前端简历,阿正',
			description: 'web前端简历,阿正',
            title: 'web前端简历-阿正',
            swiper: null,
            showLoading: true
		}
	},
	head () {
		return {
			title: this.title,
			meta: [
				{ hid: 'description', name: 'description', content: this.description },
				{ hid: 'keywords', name: 'keywords', content: this.keywords }
			],
			link: [
				{href: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css'}
			],
	        script: [  
	          { src: 'https://unpkg.com/scrollreveal/dist/scrollreveal.min.js' },
	          { src: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.min.js'},
	          { src: '/swiper.animate1.0.2.min.js'}
	        ] 			
		}
	},
	mounted () {			
		setTimeout(()=>{
			this.showLoading = false;
		},1000)
		this.$nextTick(()=>{
			this.swiper = new Swiper ('.swiper-container', {
			    direction: 'vertical',
			    loop: true,
			    scrollbarHide: true,
			    zoom: true,
			    mousewheelControl : true,
			    speed: 1000,
			    grabCursor: true,
			    onInit: function(swiper){ 
				    swiperAnimateCache(swiper);
				    swiperAnimate(swiper);
			    }, 
			    onSlideChangeEnd: function(swiper){ 
			    	swiperAnimate(swiper);
			    }	    
			})				
		})
	}
}
</script>
<style lang="less">
	.jl-box,.jl-wrap{
		width: 100%;
		height: 100%;
		position: absolute;	
		top: 0;
		left: 0;
		overflow: hidden;	
	}
	.jl-box{
		box-sizing: border-box;
		overflow: hidden;
	}
	.swiper-container {
	    width: 100%;
	    height: 100%;
	    position: absolute;
	    left: 0;
	    top: 0;
	}  	
	.jl-title{
		font-size: 20px;
		text-align: center;
	}
	.swiper-slide{
		width: 100%;
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		color: #fff;
		text-shadow: rgba(0,0,0,.2) 0 1px 3px,rgba(0,0,0,.3) 0 0 6px;
		filter: brightness(50%),hue-rotate(45deg);
		&.jbxx{
			background-image: url(../static/292497.jpg);
		}
		&.grjj{
			background-image: url(../static/317952.jpg);
		}	
		&.jsz{
			background-image: url(../static/318724.jpg);
		}	
		&.gzjl{
			background-image: url(../static/319010.jpg);
		}		
		&.xmjy{
			background-image: url(../static/292492.jpg);
		}		
		&.xqah{
			background-image: url(../static/262345.jpg);
		}										
	}
	@keyframes loading{
	  0%,100% {
	    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);
	  }
	  12.5% {
	    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);
	  }
	  25% {
	    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
	  }
	  37.5% {
	    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
	  }
	  50% {
	    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
	  }
	  62.5% {
	    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
	  }
	  75% {
	    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
	  }
	  87.5% {
	    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;
	  }
	}
	.jl-loading{
		position: fixed;
		z-index: 99999999;
		background: #009966;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		transition: all .5s linear; 
		&.hide{
			transform: scaleY(0);
			transform-origin: center 0;
		}
		.loader{
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50,-50%);
		    font-size: 25px;
		    width: 1em;
		    height: 1em;
		    border-radius: 50%;
		    position: relative;
		    text-indent: -9999em;
		    -webkit-animation: loading 1.1s infinite ease;
		    animation: loading 1.1s infinite ease;			
		}
	}
	.swiper-slide-inner{
		
	}
	.zdy-pagination{
		position: fixed;
		right: 15px;
		top: 50%;
		display: flex;
		flex-direction: column;
		z-index: 9999999;
		.zdy-pagination-item{
			margin-bottom: 5px;
			height: 30px;
			width: 30px;
			background: #DDDDDD;
			border-radius: 50%;
			text-align: center;
			line-height: 30px;
			transform: scale(.8);
			i{
				margin-left: 5px;
				font-size: 20px;
			}
			&.active{
				background: #00FFFF;
			}
		}
	}
</style>
