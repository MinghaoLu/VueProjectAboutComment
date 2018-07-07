<template>
    <div>
        <!-- 选择currentComments -->
        <single-comment v-for='item in currentComments' v-bind:comment='item' v-bind:key='item.id'></single-comment>

        <!-- 页码 -->
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
    import SingleComment from './SingleComment.vue'
    export default {
        data() {
            return {
                currentComments: [],
                totalCount: 0,
                pageSize: 5,
                currentPage: 1,
            }
        },
        components: {
            SingleComment
        },
        props: [
            'comments'
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
            /*回到第一页*/
            /*turnToFirstPage: function() {
                this.currentPage = 1;

            },*/
        },
        watch: {
            /*发表评论时触发*/
            comments: {
                handler(val) {
                    console.log("hey,comment is changed!");
                    this.setCurrentComments(1);
                },
                deep: true
            },
        },
        mounted: function() {
            /*初始化评论数*/
            this.totalCount = this.comments.length;
            this.setCurrentComments(1);
            console.log("CommentsShow: mounted");
            console.log("currentComments:" + this.currentComments.length);
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

</style>