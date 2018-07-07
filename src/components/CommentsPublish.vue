<template>
    <div class="commentInput">
        <textarea name="comment" cols="40" rows="5" placeholder="请输入评论" autofocus="autofocus" v-model.trim="comment">
        </textarea>
        <input type="button" name="publish" value="发送" v-on:click='publish'>

        <ul>
            <li
                is="commentsshow"
                v-for="item in currentComments"
                v-bind:key="item.id"
                v-bind:post="item">
            </li>
        </ul>

        <el-pagination
            layout="prev, pager, next"
            :total="totalCount"
            :page-size="pageSize"
            :current-page="currentPage"
            v-on:current-change="setCurrentComments">
        </el-pagination>
    </div>
</template>

<script>
    import Store from '../store.js'
    import commentsshow from './CommentsShow.vue'

    export default {
        name: "CommentsPublish",/*可有可无*/
        data: function() {
            return {
                storageName: 'comments',
                comment: '',
                currentComments: [],
                comments: [],
                totalCount: 0,
                pageSize: 5,
                currentPage: 1,
            }
        },
        components: {
            commentsshow
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
                ths.totalCount = this.comments.length;
                this.setCurrentComments(1);

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
            /*显示特定页码上的评论*/
            setCurrentComments: function(page) {
                /*记录当前page*/
                this.currentPage = page;

                console.log("totalCount:" + this.totalCount);

                /*特定page评论*/
                this.currentComments = [];
                let start = this.pageSize * (page - 1);
                let end = this.pageSize * page;
                for(let i = start;i < this.totalCount && i < end;i++) {
                    //console.log(i + "for");
                    this.currentComments.push(this.comments[i]);
                }
                console.log("currentComments count:" + this.currentComments.length);
            },
        },
        mounted: function() {
            this.$nextTick(() => {
                /*初始化评论*/
                this.comments = Store.fetch(this.storageName);
                console.log("mounted-commentsLength: " + this.comments.length);
                this.totalCount = this.comments.length;
                this.setCurrentComments(1);
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