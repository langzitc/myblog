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
                    <el-col :sm="24" :md="10" :lg="8" class="ce-box">
                        <el-card class="box-card-1">
                                <div slot="header" class="clearfix">
                                        <span class="card-title">热门标签</span>
                                        <el-button style="float: right; padding: 3px 0" type="text" icon="ion-ios-pricetags-outline"></el-button>
                                </div>
                                <div class="tag-list">
                                    <el-row :gutter="15">
                                        <el-col :span="12">
                                            <el-button><i class="ion-ios-navigate" style="color: #339999;font-size:14px"></i>Web前端</el-button>
                                        </el-col>
                                        <el-col :span="12">
                                            <el-button><i class="ion-social-nodejs" style="color: #669933;font-size:14px"></i>NodeJS</el-button>
                                        </el-col>
                                        <el-col :span="12">
                                            <el-button><i class="ion-social-javascript" style="color: #660000;font-size:14px"></i>JS</el-button>
                                        </el-col>
                                        <el-col :span="12">
                                            <el-button><i class="ion-social-sass" style="color: #666600;font-size:14px"></i>CSS</el-button>
                                        </el-col>
                                        <el-col :span="12">
                                            <el-button><i class="ion-aperture" style="color: #660000;font-size:14px"></i>数据库</el-button>
                                        </el-col>
                                        <el-col :span="12">
                                            <el-button><i class="ion-map" style="color: #CC3399;font-size:14px"></i>设计</el-button>
                                        </el-col>
                                        <el-col :span="12">
                                            <el-button><i class="ion-social-windows" style="color: #663366;font-size:14px"></i>服务器</el-button>
                                        </el-col>
                                        <el-col :span="12">
                                            <el-button><i class="ion-code-working" style="color: #999933;font-size:14px"></i>PHP</el-button>
                                        </el-col>	
                                        <el-col :span="12">
                                            <el-button><i class="ion-social-codepen" style="color: #990033;font-size:14px"></i>JAVA</el-button>
                                        </el-col>	
                                        <el-col :span="12">
                                            <el-button><i class="ion-social-html5" style="color: #CC3366;font-size:14px"></i>H5</el-button>
                                        </el-col>																																																																																																						
                                    </el-row>																	
                                </div>	
                        </el-card> 
                        <el-card class="box-card-1">
                                <div slot="header" class="clearfix">
                                        <span class="card-title">推荐文章</span>
                                        <el-button style="float: right; padding: 3px 0" type="text" icon="ion-heart-broken"></el-button>
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

