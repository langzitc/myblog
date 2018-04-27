<template>
	<el-container>
		<Header></Header>
	</el-container>
</template>

<script>
import Header from '../components/header'
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
		Header
	}    
}
</script>

<style lang="less"> 

</style>
