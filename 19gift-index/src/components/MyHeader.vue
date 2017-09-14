<template>

    <div class="header">
        <div class="header-brand">
            <a 
                href="/"
                :style="{
                    lineHeight: height + 'px' 
                }">
                <img 
                    src="imgs/logo.png"
                    />
            </a>
        </div>
        <ul 
            v-if="!showSwitch"
            class="header-nav">

            <li
                v-for="(navItem, index) in navList"
                @click="onNavigationItemClick(navItem, index)"
                :key="'header-nav-item' + index"
                class="header-nav-item">
                <a
                    href="javascript:void 0"
                    :style="{
                        lineHeight: height + 'px'
                    }">
                    {{ navItem.title }}
                    <div>{{ navItem.subTitle }}</div>
                </a>
            </li>


        </ul>

        <div
            v-if="showSwitch"
            @click="onSwitchClick"
            class="header-switch"
            :style="{
                width: height + 'px',
                backgroundImage: 'url(imgs/menu.png)'
            }">
        </div>
    </div>
  
</template>

<style>

    .header{

        position: relative;

        width: 100%;
        height: 100%;

        background-color: white;

        border-bottom: 1px solid #ccc;

    }
    
    .header-brand{
        position: absolute;
        height: 100%;

        left: 16px;

    }

    .header-brand a{
        display: block;
        height: 100%;

        transition: line-height 0.3s;

    }
    .header-brand img{

        vertical-align: middle;
        max-height: 60%; 
        
    }

    .header-nav{
        position: absolute;
        right: 8px;
        top: 0;
        height: 100%;

        list-style: none;

        padding: 0;
        margin: 0;

    }

    .header-nav-item{

        float: left;

        transition: background-color 0.3s;
    }
    .header-nav-item:hover{

        background-color: orangered;

    }

    .header-nav-item a{

        color: #222;

        text-decoration: none;

        position: relative;

        display: block;

        width: 100px;

        text-align: center;

        transition: color 0.3s, line-height 0.3s;
    }
    .header-nav-item a div{
        position: absolute;
        top: 24px;
        left: 0;

        width: 100%;
        height: 12px;

        font-size: 11px;
        text-align: center;
        
        color: #aaa;

        transition: color 0.3s;

    }

    .header-nav-item:hover a{
        color: white;
    }

    .header-nav-item:hover a div{
        color: white;
    }

    .header-switch{
        position: absolute;
        right: 0;
        height: 100%;

        background-repeat: no-repeat;
        background-size: 40% 40%;
        background-position-x: 50%;
        background-position-y: 50%;

        cursor: pointer;

    }


</style>

<script>
    export default {
        props: {
            brandURL: {
                type: String,
                default: "imgs/logo.png"
            },
            navList: {
                type: Array
            },
            onNavigationItemClick: {
                type: Function,
                default: function(navItem, index){
                    console.log(navItem, index);
                }
            },
            height: {
                type: Number
            },
            showSwitch: {
                type: Boolean,
                default: false
            },
            onSwitchClick: {
                type: Function,
                default: function(){
                    console.log("handleSwitchClick");
                }
            }
        }
    }
</script>


