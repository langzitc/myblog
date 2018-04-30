<template>
	<div style="position:relative">
		<Header2></Header2>
		<el-row style="margin: 20px 0">
            <el-col :xs="24" :sm="24" :md="{span:22,offset:1}" :lg="{span: 18,offset:3}" :xl="{span: 16,offset:4}">
                <breadcrumb></breadcrumb>
            </el-col>
            <el-col :xs="24" :sm="24" :md="{span:22,offset:1}" :lg="{span: 18,offset:3}" :xl="{span: 16,offset:4}">
                <el-card class="box-card-3">
                    <dl>
                        <dt>
                            <img src="../static/1.jpg" alt="">
                        </dt>
                        <dd class="text-left pic-dd-title">
                            大家按时可见度撒肯德基ask就
                        </dd>
                        <dd class="text-left pic-dd-desc">
                            <el-tag size="mini">超小标签</el-tag>
                        </dd>
                    </dl>
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

