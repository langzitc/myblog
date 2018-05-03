<template>
  <el-tabs v-model="activeName" style="color:#fff;margin:15px">
    <el-tab-pane label="新歌榜" name="1"></el-tab-pane>
    <el-tab-pane label="热歌榜" name="2"></el-tab-pane>
    <el-tab-pane label="摇滚榜" name="11"></el-tab-pane>
    <el-tab-pane label="爵士" name="12"></el-tab-pane>
    <el-tab-pane label="流行" name="16"></el-tab-pane>
    <el-tab-pane label="欧美金曲榜" name="21"></el-tab-pane>
    <el-tab-pane label="经典老哥" name="22"></el-tab-pane>
    <el-tab-pane label="情歌对唱" name="23"></el-tab-pane>
    <el-tab-pane label="影视金曲" name="24"></el-tab-pane>
    <el-tab-pane label="网络歌曲" name="25"></el-tab-pane>
		<nav class="song-list">
			<li class="song-list-item" v-for="(el,index) in data" :key="index">
				<img class="song-pic" :src="el.album_500_500" alt="" />
				<span class="song-title">{{el.title}}</span>
				<span class="song-author">{{el.author}}</span>
				<el-button class="song-icon" type="text" icon="ion-play" @click="playing(el)"></el-button>
			</li>
		</nav>
		<el-pagination
		  style="margin-top:15px"
		  small
		  layout="prev, pager, next"
		  :current-page.sync="page"
		  :total="1000">
		</el-pagination>    
		<audio class="audio" autoplay="autoplay" ref="audio" :src="songSrc">
			
		</audio>
  </el-tabs>		
</template>

<script>
	export default {
		name: 'music-plane',
		data () {
			return {
				activeName: '1',
				data: [],
				offset: 0,
				size: 8,
				page: 1,
				songid: '589759196'
			}
		},
		computed: {
			songSrc () {
				return 'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid='+this.songid;
			}
		},
		methods: {
			loadData () {
				let params = {
					type: this.activeName,
					offset: this.offset,
					size: this.size
				};
				this.$store.dispatch('getMusic',params).then(res=>{
					this.data = res.data.song_list;
					console.log(this.data);
				});				
			},
			playing (el){
				this.songid = el.song_id;
				setTimeout(()=>{
					this.$refs['audio'].play();
					console.log(this.songSrc);
				},1000)
			}
		},
		watch: {
			activeName () {
				this.page = 1;
				this.loadData();
			},
			offset () {
				this.loadData();
			},
			page (v) {
				this.offset = v-1;
			}
		},
		mounted () {
			this.loadData();
		}
	}
</script>

<style>
</style>