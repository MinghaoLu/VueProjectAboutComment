<template>
    <div class="singleComment">
        <p>{{comment.content}}</p>
        <span class="publisher">{{comment.publisher}}</span>
        <span class="createAt">{{comment.created_at}}</span>
    </div>
</template>

<script type="text/javascript">
    export default {
        data: function() {
            return {

            }
        },
        props: ['comment'],
    }
</script>

<style type="text/css">
    .singleComment {
        width: 40%;
        border: 1px dotted black;
        margin-left: 30%;
        margin-top: 10px;
    }
</style>