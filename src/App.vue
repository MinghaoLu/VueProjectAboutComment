<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 评论发送区域 -->
    <comPub v-on:new-comment='hasNewComment'></comPub>
    <comShow ref='showComment'></comShow>
    <!-- 评论显示区域 -->
  </div>

</template>
<!--  -->
<script>
import comPub from './components/CommentsPublish.vue'
import comShow from './components/CommentsShow.vue'

export default {
  name: 'App',
  data: function() {
    return {
      singleComment: '',
    }
  },
  components: {
    comPub,comShow
  },
  methods: {
    hasNewComment: function() {
      console.log('new Comment');
      this.$refs.showComment.newCommentBePublished();
      /*回到第一页*/
      this.$refs.showComment.handleCurrentChange(1);
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
