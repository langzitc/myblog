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
				<el-button class="song-icon" type="text" :icon="song.songinfo&&song.songinfo.song_id&&song.songinfo.song_id === el.song_id ? 'ion-ios-pause' : 'ion-play'" @click="playing(el)"></el-button>
			</li>
		</nav>
		<el-pagination
		  style="margin-top:15px"
		  small
		  layout="prev, pager, next"
		  :current-page.sync="page"
		  :total="1000">
		</el-pagination>    
  </el-tabs>		
</template>

<script>
	let audio = null;
	export default {
		name: 'music-plane',
		data () {
			return {
				activeName: '1',
				data: [],
				offset: 0,
				size: 8,
				page: 1,
				songSrc: '',
				song: {}
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
				});				
			},
			playing (el){
				this.$store.dispatch('getMusic',{
					method: 'baidu.ting.song.play',
					songid: el.song_id
				}).then(res=>{
					this.$store.commit('playSong',res.data);
					this.song = res.data;
					this.songSrc = res.data.bitrate.show_link;
					if(audio){
						audio.pause();
						audio.src = this.songSrc;
					}else{
						audio = new Audio(this.songSrc);						
					}
					audio.play();
					this.$emit('playing');
				})
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
				this.offset = this.size*(v-1);
			}
		},
		mounted () {
			this.loadData();
		}
	}
</script>

<style>
</style>