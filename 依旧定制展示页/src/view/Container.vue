<template>
  
    <div class="container">

        <div 
            class="container-left"
            :style="{
                paddingRight: showSideBar ? sideBarWidth + 'px' : 0
            }">
            <slot name="container-main"></slot>
        </div>
        <div 
            class="container-right"
            :style="{
                width: showSideBar ? sideBarWidth + 'px' : 0
            }">
            <slot name="container-sidebar"></slot>
        </div>

    </div>


</template>


<style>

    .container{
        position: relative;

        min-width: 320px;

        width: 100%;
        height: 100%;

        overflow: hidden;

        background-color: white;

    }

    .container-left{

        position: relative;

        width: 100%;
        height: 100%;


        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -ms-box-sizing: border-box;

        transition: padding-right 0.3s;

    }

    .container-right{
        
        border-left: 1px solid #ccc;
        position: relative;

        position: absolute;
        right: 0;
        
        height: 100%;

        top: 0;

        transition: width 0.3s;

        z-index: 999;

    }

</style>

<script>

    export default {
        props: {
            sideBarWidth: {
                type: Number,
                default: 100
            },
            showSideBar: {
                type: Boolean,
                default: true
            }
        },
        data(){
            return {

            }
        }
    }

</script>



