<template>
	<div style="position:relative">
		<Header2></Header2>
		<el-row style="margin: 20px 0">
            <el-col :xs="24" :sm="24" :md="{span:22,offset:1}" :lg="{span: 18,offset:3}" :xl="{span: 16,offset:4}">
                <breadcrumb></breadcrumb>
            </el-col>
            <el-col :xs="24" :sm="24" :md="{span:22,offset:1}" :lg="{span: 18,offset:3}" :xl="{span: 16,offset:4}">
                <el-card class="box-card-4">
					<div class="talk-con-wrap">
						<div class="talk-con-wrap-left">
							<img src="../static/1.jpg" alt="" />
						</div>
						<div class="talk-con-wrap-right">
							<dl>
								<dt class="talk-con-wrap-title">阿正</dt>
								<dd class="talk-con-wrap-desc">送达时间打开链接撒花开的房间撒谎空间撒电话卡上的解客户</dd>
								<dd class="talk-con-wrap-pic">
									<img src="../static/1.jpg" alt="" />
									<img src="../static/1.jpg" alt="" />
									<img src="../static/1.jpg" alt="" />
									<img src="../static/1.jpg" alt="" />
								</dd>
								<dd class="talk-con-wrap-bot">
									<span>8月7日 8:50</span>
									<i class="talk-icon talk-icon1 ion-android-textsms"></i>
									<i class="talk-icon talk-icon2 ion-thumbsup"></i>
									<i class="talk-icon talk-icon3 ion-thumbsdown"></i>									
								</dd>
							</dl>
						</div>
					</div>
					<div class="talk-con-wrap">
						<div class="talk-con-wrap-left">
							<img src="../static/1.jpg" alt="" />
						</div>
						<div class="talk-con-wrap-right">
							<dl>
								<dt class="talk-con-wrap-title">阿正</dt>
								<dd class="talk-con-wrap-desc">送达时间打开链接撒花开的房间撒谎空间撒电话卡上的解客户</dd>
								<dd class="talk-con-wrap-pic">
									<img src="../static/1.jpg" alt="" />
									<img src="../static/1.jpg" alt="" />
									<img src="../static/1.jpg" alt="" />
									<img src="../static/1.jpg" alt="" />
								</dd>
								<dd class="talk-con-wrap-bot">
									<span>8月7日 8:50</span>
									<i class="talk-icon talk-icon1 ion-android-textsms"></i>
									<i class="talk-icon talk-icon2 ion-thumbsup"></i>
									<i class="talk-icon talk-icon3 ion-thumbsdown"></i>
								</dd>
							</dl>
						</div>
						<div class="talk-con-zan">
							<i class="ion-heart zan-icon"></i>
							<img src="../static/1.jpg" alt="" />
							<img src="../static/1.jpg" alt="" />
							<img src="../static/1.jpg" alt="" />
							<img src="../static/1.jpg" alt="" />	
							<div class="talk-con-pllist">
								<p>
									<span class="talk-pl-f">Akdjs</span>
									<span class="talk-pl-xw">:</span>
									<span class="talk-pl-con">斯卡迪sad拉升阶段三等奖开始</span>
								</p>
								<p>
									<span class="talk-pl-f">Akdjs</span>
									<span class="talk-pl-s">回复</span>
									<span class="talk-pl-to">阿正</span>
									<span class="talk-pl-xw">:</span>
									<span class="talk-pl-con">斯卡迪sad拉升阶段三等奖开始</span>
								</p>								
							</div>
						</div>
					</div>					
                </el-card>
            </el-col>        
		</el-row>
        <friend-link></friend-link>    
		<page-footer></page-footer>
	</div>  
</template>
<script>
import Header2 from '../components/header2'
import PageFooter from '../components/footer'
import FriendLink from '../components/friendlink'
import Breadcrumb from '../components/nav'
export default {
	data () {
		return {
			activeName: '',
			keywords: 'tuch',
			description: 'tuch',
      title: '屠春首页'   
		}
	},
	head () {
		return {
			title: this.title,
			meta: [
				{ hid: 'description', name: 'description', content: this.description },
				{ hid: 'keywords', name: 'keywords', content: this.keywords }
			]
		}
	},
	components: {
		Header2,
        PageFooter,
        FriendLink,
		Breadcrumb
	}    
}
</script>
