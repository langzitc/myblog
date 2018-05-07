<template>
	<div style="position:relative">
	<el-container>
		<Header></Header>
	</el-container>
	<section class="section-wrap">
		<el-row>
			<el-col :xs="24" :sm="24" :md="{span:22,offset:1}" :lg="{span: 18,offset:3}" :xl="{span: 16,offset:4}">
				<el-row :gutter="50">
					<el-col :xs="24" :sm="12" :md="8" class="pic-list-item" v-for="(el,index) in data" v-if="index<6" :key="index">
						<el-card class="box-card-1">
							<div slot="header" class="clearfix">
								<span class="card-title">{{el.title | limit(14)}}</span>
								<el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-more"></el-button>
							</div>
							<div class="picitem">
								<img src="../static/4.jpg" class="picitem-img" alt="">
								<dl>
									<dt>{{el.desc | limit(20)}}</dt>
									<dd class="text-right">
										<el-button type="text" icon="el-icon-edit"></el-button>
										<span class="text-num">25</span>										
										<el-button type="text" icon="el-icon-view"></el-button>
										<span class="text-num">25</span>
										<el-button type="text" icon="el-icon-share"></el-button>
										<span class="text-num">25</span>										
									</dd>
								</dl>
							</div>
						</el-card>
					</el-col>														
				</el-row>
			</el-col>
			<el-col :xs="24" :sm="24" :md="{span:22,offset:1}" :lg="{span: 18,offset:3}" :xl="{span: 16,offset:4}">
				<el-card class="box-card-1">
					<div slot="header" class="clearfix">
						<span class="card-title">推荐文章</span>
						<el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-more"></el-button>
					</div>
					<div class="article-list">
						<div class="article-list-item" v-for="(el,index) in data" v-if="index>5" :key="index">
							<el-row>
								<el-col :span="16">
									<span class="article-list-title">{{el.title | limit(20)}}</span>
								</el-col>
								<el-col :span="8" class="text-right">
									<span class="article-list-date text-muted">{{el.create_at | date}}</span>
									<el-button type="text" icon="ion-chatbubble-working"></el-button>
									<span class="text-num">{{el.hit}}</span>
								</el-col>
							</el-row>							
						</div>																		
					</div>	
				</el-card>					
			</el-col>
		</el-row>
		<friend-link></friend-link>
	</section>
	<page-footer></page-footer>		
	</div>
</template>

<script>
import Header from '../components/header'
import PageFooter from '../components/footer'
import FriendLink from '../components/friendlink'
import axios from 'axios'
export default {
	data () {
		return {
			activeName: '',
			keywords: 'tuch',
			description: 'tuch',
			title: '屠春首页',
			data: []
		}
	},
	async asyncData () {
		let res = await axios.post('/article/list_article',{
			page: 1,
			pageSize: 16
		});
		return {
			data: res.data.rows
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
		Header,
		PageFooter,
		FriendLink
	}    
}
</script>

<style lang="less"> 

</style>
