<template>
	<div>
		<Header2></Header2>
		<el-row style="margin: 20px 0">
				<el-col :xs="24" :sm="24" :md="{span:22,offset:1}" :lg="{span: 18,offset:3}" :xl="{span: 16,offset:4}">
					<breadcrumb></breadcrumb>
				</el-col>
				<el-col :xs="24" :sm="24" :md="{span:22,offset:1}" :lg="{span: 18,offset:3}" :xl="{span: 16,offset:4}">
									<el-row :gutter="20">
											<el-col :sm="24" :md="14" :lg="16">
													<el-card class="box-card-1">
															<div slot="header" class="clearfix text-center">
																	<h5 class="card-title">文章标题</h5>
																	<p class="article-bz">
																		<span class="article-bz-label">作者:</span>
																		<span class="article-bz-num">tuchun</span>
																		<span class="article-bz-label">来源:</span>
																		<span class="article-bz-num">原创</span>
																		<span class="article-bz-label">发布:</span>
																		<span class="article-bz-num">2018-05-01</span>
																		<span class="article-bz-label">标签:</span>
																		<span class="article-bz-num">
																				<el-tag size="mini">JS</el-tag>
																				<el-tag size="mini">前端</el-tag>
																		</span>
																		<span class="article-bz-label">浏览:</span>
																		<span class="article-bz-num">505</span>	
																		<span class="article-bz-label">评论:</span>
																		<span class="article-bz-num">505</span>																																																																																					
																	</p>
																	<p class="article-desc"></p>
															</div>
															<div class="article-content">
															</div>
													</el-card>
											</el-col>
											<el-col :sm="24" :md="10" :lg="8" class="ce-box">
													<el-card class="box-card-1">
															<div slot="header" class="clearfix">
																	<span class="card-title">推荐文章</span>
																	<el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-more"></el-button>
															</div>
															<div class="article-list">
																	<div class="article-list-item">
																			<el-row>
																					<el-col :span="24">
																							<span class="article-list-title">是的卡号是单卡斯柯达斯柯达石达开撒娇的</span>
																					</el-col>
																			</el-row>							
																	</div>	
																	<div class="article-list-item">
																			<el-row>
																					<el-col :span="24">
																							<span class="article-list-title">是的卡号是单卡斯柯达斯柯达石达开撒娇的</span>
																					</el-col>
																			</el-row>							
																	</div>	
																	<div class="article-list-item">
																			<el-row>
																					<el-col :span="24">
																							<span class="article-list-title">是的卡号是单卡斯柯达斯柯达石达开撒娇的</span>
																					</el-col>
																			</el-row>							
																	</div>																		
															</div>	
													</el-card> 
													<el-card class="box-card-1">
															<div slot="header" class="clearfix">
																	<span class="card-title">推荐文章</span>
																	<el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-more"></el-button>
															</div>
															<div class="article-list">
																	<div class="article-list-item">
																			<el-row>
																					<el-col :span="24">
																							<span class="article-list-title">是的卡号是单卡斯柯达斯柯达石达开撒娇的</span>
																					</el-col>
																			</el-row>							
																	</div>	
																	<div class="article-list-item">
																			<el-row>
																					<el-col :span="24">
																							<span class="article-list-title">是的卡号是单卡斯柯达斯柯达石达开撒娇的</span>
																					</el-col>
																			</el-row>							
																	</div>	
																	<div class="article-list-item">
																			<el-row>
																					<el-col :span="24">
																							<span class="article-list-title">是的卡号是单卡斯柯达斯柯达石达开撒娇的</span>
																					</el-col>
																			</el-row>							
																	</div>																		
															</div>	
													</el-card>                                            
											</el-col>
									</el-row>
				</el-col>        
		</el-row>
		<friend-link style="margin-top:140px"></friend-link>
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

