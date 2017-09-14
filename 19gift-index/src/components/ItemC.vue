<template>

    <div class="item-c">
        <img :src="iconURL"/>
        {{content}}
        <div class="item-c-line"></div>
    </div>
            
</template>
<style>

    .item-c{

        position: relative;

        padding: 8px 16px;

        color: #ccc;

        font-size: 14px;

    }

    .item-c img{
        vertical-align: middle;

        margin-left: 16px;
        margin-right: 8px;

        width: 32px;
        height: 32px;
    }

    .item-c-line{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 3px;

        background-color: orangered;

        transition: width 0.3s;
    }

    .item-c:hover .item-c-line{
        width: 100%;
    }

</style>
<script>


    export default {

        props: {
            iconURL: {
                type: String
            },
            content: {
                type: String
            }
        }

        
    }
</script>