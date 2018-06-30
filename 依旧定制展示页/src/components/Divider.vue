<template>

    <div class="divider">

        <div class="divider-title" :style="{color: color}">{{title}}</div>

        <div 
            class="divider-line">
            
            <div :style="{backgroundColor: lineColor}"></div>
            <span
                :style="{color: lineColor}">
                &#8226;
            </span>
            <div :style="{backgroundColor: lineColor}"></div>


        </div>


    </div>
            
</template>
<style>

    .divider{

        width: 100%;

        text-align: center;

        margin: 32px 0 16px 0;

    }

    .divider-title{
        
        font-size: 28px;
    }
    
    .divider-line{
        
        margin-top: 8px;

        text-align: center;
        width: 100%;
        position: relative;

    }

    .divider-line div{
        vertical-align: middle;

        display: inline-block;
        height: 1px;

        width: 20%;


        transition: width 0.3s;
    }


</style>
<script>


    export default {


        props: {

            title: {
                type: String,
                default: "Title"
            },
            color: {
                type: String,
                default: "black"
            },
            lineColor: {
                type: String,
                default: "#666"
            }
            

        }

        
    }
</script>