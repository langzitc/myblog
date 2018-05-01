<template>
	<div>
		<Header2></Header2>
        <el-card class="register-box-card">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="电话" prop="tel">
                <el-input v-model="ruleForm.tel"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
				<el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="nick">
				<el-input v-model="ruleForm.nick"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="repassword">
                <el-input v-model="ruleForm.repassword"></el-input>
            </el-form-item>            
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
            </el-form>            
        </el-card>
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
            title: '屠春首页',
            ruleForm: {
                tel: '',
                email: '',
                nick: '',
                password: '',
                repassword: ''
            },
            rules: {
                tel: [
                    { required: true, message: '请输入手机号', trigger: 'blur' }
                ],    
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blur' }
                ],       
                nick: [
                    { required: true, message: '请输入昵称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],  
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ],  
                repassword: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ]
            }    
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
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }			
	},
	components: {
		Header2,
        PageFooter,
        FriendLink
	}    
}
</script>

