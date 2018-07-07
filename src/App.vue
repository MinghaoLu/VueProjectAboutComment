<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 评论从发送开始 -->
    <comments-publish></comments-publish>
    <!-- <commentsshow v-bind:post='singleComment'></commentsshow> -->
  </div>

</template>
<!--  -->
<script>
import CommentsPublish from './components/CommentsPublish.vue'
/*import commentsshow from './components/CommentsShow.vue'*/

export default {
  name: 'App',
  data: function() {
    return {

    }
  },
  components: {
    CommentsPublish
  },
  methods: {
    /*接收新评论并发送给子组件CommentsShow*/
    /*hasNewComment: function(comment) {
      console.log('new comment');
      this.singleComment = comment;*/

      /*this.$refs.showComment.newCommentBePublished();*/
      /*回到第一页*/
      /*this.$refs.showComment.handleCurrentChange(1);*/
    //}
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
