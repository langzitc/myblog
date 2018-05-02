<template>
	<div>
	<Header2></Header2>
	<div class="jl-box">
		<div class="jl-loading" :class="showLoading ? '' : 'hide'">
			<div class="loader">
				Loading...
			</div>
		</div>
		<div class="jl-wrap">
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide jbxx">
			        	<h5 class="jl-title ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.2s" swiper-animate-delay="0.1s">基本信息</h5>
			        </div>
			        <div class="swiper-slide grjj">
			        	<div class="swiper-slide-inner">
							<h5 class="jl-title">个人简介</h5>			        		
			        	</div>
			        </div>
			        <div class="swiper-slide jsz">
			        	<div class="swiper-slide-inner">
			        		<h5 class="jl-title">技术栈</h5>
			        	</div>
			        </div>			        
			        <div class="swiper-slide gzjl">
			        	<div class="swiper-slide-inner">
			        		<h5 class="jl-title">工作经历</h5>
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
        <!--<page-footer style="position: fixed;bottom: 0;"></page-footer>-->
	</div>  		
	</div>
</template>
<script>
import Header2 from '../components/header2'
import PageFooter from '../components/footer'
export default {
    name: 'register',
	data () {
		return {
			activeName: '',
			keywords: 'tuch',
			description: 'tuch',
            title: '屠春首页',
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
	components: {
		Header2
	},
	mounted () {			
		setTimeout(()=>{
			this.showLoading = false;
		},1000)
		let h = window.innerHeight;
		document.querySelector('.jl-box').style.height = (h-41)+"px";
		document.querySelector('.swiper-container').style.height = h+"px";
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
	.jl-box{
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
	}
	.swiper-container {
	    width: 100%;
	}  	
	.jl-title{
		font-size: 20px;
		text-align: center;
		margin: 30px;
	}
	.swiper-slide{
		&.jbxx{
			background: linear-gradient(#ffffff, #0099CC 50%,#ffffff);
		}
		&.grjj{
			background: linear-gradient(#ffffff, #339966 50%,#ffffff);
		}	
		&.jsz{
			background: linear-gradient(#ffffff, #993366 50%,#ffffff);
		}	
		&.gzjl{
			background: linear-gradient(#ffffff, #66CCCC 50%,#ffffff);
		}		
		&.xmjy{
			background: linear-gradient(#ffffff, #663300 50%,#ffffff);
		}		
		&.xqah{
			background: linear-gradient(#ffffff, #FF9933 50%,#ffffff);
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
</style>
