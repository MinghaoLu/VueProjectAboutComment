<template>
    <div class="commentInput">
        <textarea name="comment" cols="40" rows="5" placeholder="请输入评论" autofocus="autofocus" v-model.trim="comment">
        </textarea>
        <input type="button" name="publish" value="发送" v-on:click='publish'>

        <comments-show v-bind:comments='comments'></comments-show>


    </div>
</template>

<script>
    import Store from '../store.js'
    import CommentsShow from './CommentsShow.vue'

    export default {
        name: "CommentsPublish",/*不影响*/
        data: function() {
            return {
                storageName: 'comments',
                comment: '',
                comments: [],
            }
        },
        components: {
            CommentsShow
        },
        methods: {
            /*发送评论*/
            publish: function() {
                console.log("publish");
                if(this.comment ==''){
                    alert("评论不能为空");
                    return;
                }
                /*this.$emit('comment',this.comment,2);*/

                let id = Math.ceil(Math.random() * 100);
                /*评论发布者、日期*/
                let date = new Date();
                date = date.toLocaleString();
                let publisher = "LMH";

                let singleComment = {
                    "id":id,"publisher":publisher,"content":this.comment,"created_at":date};
                /*存储到localStorage中*/
                Store.save(this.storageName,singleComment);

                /*更新评论*/
                this.comments.unshift(singleComment);

                this.comment = '';
            },
            // /*获取本地数据并且解析为JSON数据*/
            // fetch: function(name){
            //     return JSON.parse(window.localStorage.getItem(name) || '[]');
            // },
            // /*把数据以字符串的形式储存在本地*/
            // save: function(name,items) {
            //     window.localStorage.setItem(name,JSON.stringify(items));
            // },

        },
        mounted: function() {
            this.$nextTick(() => {
                /*初始化评论*/
                this.comments = Store.fetch(this.storageName);
                console.log("mounted-commentsLength: " + this.comments.length);
            });
        },
    }
</script>

<style>
    .commentInput {
        margin-left: 10%;
        width: 80%;
    }

    .commentInput ul {
        list-style-type: none;

    }

    .commentInput ul li {
    }

</style>