<template>
    <section class="friend-link">
        <el-alert
            title=""
            type="info"
            center
            :closable="false"
            >
            <el-tag><a href="https://www.54tuchun.com">社区</a></el-tag>
            <el-tag type="success"><a href="https://www.54tuchun.com">博客</a></el-tag>
            <el-tag type="info"><a href="https://www.54tuchun.com">门户</a></el-tag>
            <el-tag type="warning"><a href="https://www.54tuchun.com">微站</a></el-tag>
            <el-tag type="danger"><a href="https://www.54tuchun.com">社区</a></el-tag> 
        </el-alert>           
    </section>
</template>
<script>
    export default {
        name: 'friend-link',
        props: {
            friendLinkList: {
                type: Array,
                default () {
                    return []
                }
            }
        }
    }
</script>
<style lang="less">
    
</style>