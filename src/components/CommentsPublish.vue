<template>
    <div class="commentInput">
        <textarea name="comment" cols="40" rows="5" placeholder="请输入评论" autofocus="autofocus" v-model.trim="comment">
        </textarea>
        <input type="button" name="publish" value="发送" v-on:click='publish'>
    </div>
</template>

<script>
    import Store from '../store.js'

    export default {
        name: "CommentsPublish",/*可有可无*/
        data: function() {
            return {
                comment: '',
            }
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

                /*存储到localStorage中*/
                const storageName = 'comments';
                Store.save(storageName,{
                    "id":id,"publisher":publisher,"content":this.comment,"created_at":date});

                /*通知父组件App有新评论*/
                this.$emit('new-comment',
                    {
                        "id":id,
                        "publisher":publisher,
                        "content":this.comment,
                        "created_at":date
                    }
                    );

            },
            // /*获取本地数据并且解析为JSON数据*/
            // fetch: function(name){
            //     return JSON.parse(window.localStorage.getItem(name) || '[]');
            // },
            // /*把数据以字符串的形式储存在本地*/
            // save: function(name,items) {
            //     window.localStorage.setItem(name,JSON.stringify(items));
            // },
        }
    }
</script>

<style>
    .commentInput {
        width: 40%;
        margin-left: 30%;
    }
</style>