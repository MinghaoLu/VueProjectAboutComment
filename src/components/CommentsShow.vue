<template>
        <li class="singleComment">
            <p v-text="post.content">评论</p>
            <span class="publisher" v-text="post.publisher">发布者</span>
            <span class="createAt" v-text="post.created_at">时间</span>
        </li>
</template>

<script>
    import Store from '../store.js'

    export default {
        data() {
            return {
                // currentComments: [],
                // comments: [],
                // totalCount: 0,
                // pageSize: 5,
                // currentPage: 1,
            }
        },
        props: [
            'post'
        ],
        methods: {
            /*有新评论*/
            // newCommentBePublished: function() {
                /*获取全部评论*/
                // this.comments = Store.fetch('comments');
                /*重新计算评论条数*/
                // this.totalCount = this.comments.length;
            // },
            /*改变页码时触发，page为页码*/
            // handleCurrentChange: function(page) {
            //     /*记录当前page*/
            //     this.currentPage = page;

            //     console.log("totalCount:" + this.totalCount);

            //     /*特定page评论*/
            //     this.setCurrentComments(page);

            // },
            // setCurrentComments: function(page) {
            //     /*特定page评论*/
            //     this.currentComments = [];
            //     let start = this.pageSize * (page - 1);
            //     let end = this.pageSize * page;
            //     for(let i = start;i < this.totalCount && i < end;i++) {
            //         //console.log(i + "for");
            //         this.currentComments.push(this.comments[i])
            //     }
            // },
            /*回到第一页*/
            /*turnToFirstPage: function() {
                this.currentPage = 1;

            },*/
        },
        // watch: {
        //     /*发表评论时触发*/
        //     post: {
        //         handler(val) {
        //             console.log("hey,comment is changed!");
        //             this.comments.unshift(val)
        //             this.totalCount = this.comments.length;
        //             this.handleCurrentChange(1);
        //         },
        //         deep: true
        //     },
        // },
        mounted: function() {
            console.log("CommentsShow: mounted");
            // this.$nextTick(()=>{
            //     console.log(this.comments);
            //     /*初始化评论*/
            //     this.comments = Store.fetch('comments');
            //     this.totalCount = this.comments.length;
            //     this.handleCurrentChange(1);
            // });
        }
    }
</script>

<style>
    .singleComment {
        width: 40%;
        border: 1px dotted black;
        margin-left: 30%;
        margin-top: 10px;
    }

    .singleComment li {
        width: 50%;
    }
</style>