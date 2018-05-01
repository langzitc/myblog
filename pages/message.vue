<template>
	<div style="position:relative">
		<Header2></Header2>
		<el-row style="margin: 20px 0">
            <el-col :xs="24" :sm="24" :md="{span:22,offset:1}" :lg="{span: 18,offset:3}" :xl="{span: 16,offset:4}">
                <breadcrumb></breadcrumb>
            </el-col>
            <el-col :xs="24" :sm="24" :md="{span:22,offset:1}" :lg="{span: 18,offset:3}" :xl="{span: 16,offset:4}">
                <el-card class="box-card-4">
					<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="message-ruleForm">
					  <el-form-item label="姓名" prop="name">
					    <el-input v-model="ruleForm.name"></el-input>
					  </el-form-item>
					  <el-form-item label="邮箱" prop="email">
					    <el-input v-model="ruleForm.email"></el-input>
					  </el-form-item>					  
					  <el-form-item label="留言" prop="content">
					    <el-input :rows="5" type="textarea" v-model="ruleForm.content"></el-input>
					  </el-form-item>
					  <el-form-item>
					    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
					  </el-form-item>
					</el-form>				
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
      		title: '屠春首页',
	        ruleForm: {
	          name: '',
	          email: '',
	          content: ''
	        },
	        rules: {
	          name: [
	            { required: true, message: '请输入姓名', trigger: 'blur' },
	            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
	          ],
	          email: [
	            { required: true, message: '请输入邮箱', trigger: 'blur' },
	          ],
	          content: [
	            { required: true, message: '请输入留言', trigger: 'blur' },
	            { min: 10, max: 200, message: '长度在 10 到 200 个字符', trigger: 'blur' }
	          ],	          
	        }      		
		}
	},
	methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
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
