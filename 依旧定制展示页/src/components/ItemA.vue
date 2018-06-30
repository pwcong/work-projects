<template>

    <div class="item-a">

        <div class="item-a-head">
            <div class="item-a-head-line"></div>
            <div class="item-a-head-icon">
                <div 
                    :style="{
                        backgroundImage: 'url(' + icon + ')'
                    }">
                    
                </div>
            </div>


        </div>
        
        <div class="item-a-title">
            <h2>{{title}}</h2>
        </div>

        <div class="item-a-subtitles">
            <div 
                v-for="subTitle in subTitles"
                :key="'subtitles-item-' + subTitle">
                {{subTitle.content}}
            </div>

        </div>

    </div>
            
</template>
<style>

    .item-a{

        
    }

    .item-a-head{
        width: 100%;
        height: 100px;

        position: relative;

    }

    .item-a-head-line{
        position: absolute;
        top: 50%;
        left: 0;

        width: 100%;
        height: 1px;

        background-color: #aaa;
    }

    .item-a-head-icon{

        z-index: 100;

        position: relative;

        height: 100px;
        width: 100px;

        margin: 0 auto;

        box-sizing: border-box;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;

        padding: 8px;

        transition: padding 0.3s;

    }
    
    .item-a-head-icon div{

        position: relative;

        left: -2px;

        background-color: white;

        border-radius: 50%;

        border: 2px solid #ccc;

        width: 100%;
        height: 100%;

        background-size: 60px 60px;
        background-position-x: 50%;
        background-position-y: 50%;
        background-repeat: no-repeat;

        transition: border 0.3s;

    }

    .item-a-head-icon:hover div{
        border: 2px solid orangered;
    }

    .item-a-title{
        width: 100%;
        text-align: center;

        font-size: 12px;
        
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;

        padding: 0 16px;
    }

    .item-a-subtitles{

        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        padding: 0 32px;

        width: 100%;
        text-align: center;
        font-size: 12px;

        color: #aaa;
    }

</style>
<script>


    export default {

        props: {

            icon: {
                type: String
            },
            title: {
                type: String
            },
            subTitles: {
                type: Array
            }

        }

        
    }
</script>