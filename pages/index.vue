<template>
	<div style="position:relative">
	<el-container>
		<Header></Header>
	</el-container>
	<section class="section-wrap">
		<el-row>
			<el-col :xs="24" :sm="24" :md="{span:22,offset:1}" :lg="{span: 18,offset:3}" :xl="{span: 16,offset:4}">
				<el-row :gutter="50">
					<el-col :xs="24" :sm="12" :md="8" class="pic-list-item">
						<el-card class="box-card-1">
							<div slot="header" class="clearfix">
								<span class="card-title">卡片名称</span>
								<el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-more"></el-button>
							</div>
							<div class="picitem">
								<img src="../static/4.jpg" class="picitem-img" alt="">
								<dl>
									<dt>打开手机付款发货的时刻时间单卡双卡的就撒开的技术上课就是打开手机十大科技ask</dt>
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
					<el-col :xs="24" :sm="12" :md="8" class="pic-list-item">
						<el-card class="box-card-1">
							<div slot="header" class="clearfix">
								<span class="card-title">卡片名称</span>
								<el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-more"></el-button>
							</div>
							<div class="picitem">
								www
							</div>
						</el-card>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" class="pic-list-item">
						<el-card class="box-card-1">
							<div slot="header" class="clearfix">
								<span class="card-title">卡片名称</span>
								<el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-more"></el-button>
							</div>
							<div class="picitem">
								www
							</div>
						</el-card>
					</el-col>
					<el-col :xs="24" :sm="12" :md="8" class="pic-list-item">
						<el-card class="box-card-1">
							<div slot="header" class="clearfix">
								<span class="card-title">卡片名称</span>
								<el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-more"></el-button>
							</div>
							<div class="picitem">
								www
							</div>
						</el-card>
					</el-col>	
					<el-col :xs="24" :sm="12" :md="8" class="pic-list-item">
						<el-card class="box-card-1">
							<div slot="header" class="clearfix">
								<span class="card-title">卡片名称</span>
								<el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-more"></el-button>
							</div>
							<div class="picitem">
								www
							</div>
						</el-card>
					</el-col>	
					<el-col :xs="24" :sm="12" :md="8" class="pic-list-item">
						<el-card class="box-card-1">
							<div slot="header" class="clearfix">
								<span class="card-title">卡片名称</span>
								<el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-more"></el-button>
							</div>
							<div class="picitem">
								www
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
						<div class="article-list-item">
							<el-row>
								<el-col :span="16">
									<span class="article-list-title">是的卡号是单卡斯柯达斯柯达石达开撒娇的</span>
								</el-col>
								<el-col :span="8" class="text-right">
									<span class="article-list-date text-muted">2018-12-22</span>
									<el-button type="text" icon="el-icon-edit"></el-button>
									<span class="text-num">25</span>
								</el-col>
							</el-row>							
						</div>	
						<div class="article-list-item">
							<el-row>
								<el-col :span="16">
									<span class="article-list-title">是的卡号是单卡斯柯达斯柯达石达开撒娇的</span>
								</el-col>
								<el-col :span="8" class="text-right">
									<span class="article-list-date text-muted">2018-12-22</span>
									<el-button type="text" icon="el-icon-edit"></el-button>
									<span class="text-num">25</span>
								</el-col>
							</el-row>							
						</div>	
						<div class="article-list-item">
							<el-row>
								<el-col :span="16">
									<span class="article-list-title">是的卡号是单卡斯柯达斯柯达石达开撒娇的</span>
								</el-col>
								<el-col :span="8" class="text-right">
									<span class="article-list-date text-muted">2018-12-22</span>
									<el-button type="text" icon="el-icon-edit"></el-button>
									<span class="text-num">25</span>
								</el-col>
							</el-row>							
						</div>																		
					</div>	
				</el-card>					
			</el-col>
		</el-row>
	</section>
	<page-footer></page-footer>		
	</div>
</template>

<script>
import Header from '../components/header'
import PageFooter from '../components/footer'
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
	mounted () {
			
	},
	components: {
		Header,
		PageFooter
	}    
}
</script>

<style lang="less"> 

</style>
