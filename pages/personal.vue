<template>
	<div>
		<Header2></Header2>
		<el-row>
			<el-col :xs="24" :sm="24" :md="{span:22,offset:1}" :lg="{span: 18,offset:3}" :xl="{span: 16,offset:4}">
				<el-container style="padding: 30px 0;">
				  <el-aside width="200px">
					    <el-menu
					      default-active="2"
					      class="el-menu-vertical-demo"
						>
					      <el-submenu index="1">
					        <template slot="title">
					          <i class="el-icon-location"></i>
					          <span>导航一</span>
					        </template>
					        <el-menu-item-group>
					          <template slot="title">分组一</template>
					          <el-menu-item index="1-1">选项1</el-menu-item>
					          <el-menu-item index="1-2">选项2</el-menu-item>
					        </el-menu-item-group>
					        <el-menu-item-group title="分组2">
					          <el-menu-item index="1-3">选项3</el-menu-item>
					        </el-menu-item-group>
					        <el-submenu index="1-4">
					          <template slot="title">选项4</template>
					          <el-menu-item index="1-4-1">选项1</el-menu-item>
					        </el-submenu>
					      </el-submenu>
					      <el-menu-item index="2">
					        <i class="el-icon-menu"></i>
					        <span slot="title">导航二</span>
					      </el-menu-item>
					      <el-menu-item index="3" disabled>
					        <i class="el-icon-document"></i>
					        <span slot="title">导航三</span>
					      </el-menu-item>
					      <el-menu-item index="4">
					        <i class="el-icon-setting"></i>
					        <span slot="title">导航四</span>
					      </el-menu-item>
					    </el-menu>		  	
				  </el-aside>
				  <el-main>Main</el-main>
				</el-container>				
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
export default {
    name: 'register',
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
        FriendLink
	}    
}
</script>

