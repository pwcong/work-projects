<template>

    <div class="item-b">

        <div 
            class="item-b-sec item-b-bg"
            :style="{
                backgroundImage: 'url(' + bgURL + ')'
            }">
            <div class="item-b-bg-content">
                {{content}}
            </div>
        </div>

        <div class="item-b-sec item-b-title">
            <h2>
                {{title}}
            </h2>
        </div>

    </div>
            
</template>
<style>

    .item-b{

        border: 1px solid #ccc;

        transition: border-color 0.3s;

    }

    .item-b-sec{
        width: 100%;
    }

    .item-b-bg{

        height: 200px;

        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: 50%;
        background-position-y: 50%;
    }

    .item-b-bg-content{
        

        display: flex;
        align-items: center;
        justify-content: center;

        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -ms-box-sizing: border-box;
        -moz-box-sizing: border-box;

        padding: 16px 32px;

        text-align: center;

        color: white;

        opacity: 0;

        background-color: rgba(0, 0, 0, 0.8);

        width: 100%;
        height: 100%;

        transition: opacity 0.3s;

    }
    .item-b:hover .item-b-bg-content{
        opacity: 1;
    }

    .item-b:hover{
        border-color: orangered;
    }

    .item-b-title{
        text-align: center;

        font-size: 13px;
    }

</style>
<script>


    export default {

        props: {
            bgURL: {
                type: String
            },
            title: {
                type: String
            },
            content: {
                type: String
            }
        }

        
    }
</script>