<template>

    <container
        :showSideBar="showSideBar"
        :sideBarWidth="sideBarWidth">

        <div slot="container-main" class="container-main">
            <div 
                class="container-main-head"
                :style="{
                    paddingRight: showSideBar ? sideBarWidth + 'px' : 0,
                    height: headerHeight + 'px'
                }">
                <my-header
                    :on-switch-click="toggleSideBar"
                    :on-navigation-item-click="handleNavigationItemClick"
                    :show-switch="showSideBarSwitch"
                    :height="headerHeight"
                    :navList="navList"/>
            </div>
            <div 
                ref="mainContainer"
                class="container-main-content"
                :style="{
                    paddingTop: headerHeight + 'px'
                }">

                <my-banner
                    id="home"
                    :height="bannerHeight"
                    :bannerList="bannerList"/>

                <my-services id="services"/>
                <my-projects id="projects"/>
                <contact-us id="contact"/>
                <div class="footer">
                    总部地址：xxxxxxxxxxxxxxxxx
                </div>
                
            </div>
        </div>
        <div slot="container-sidebar" class="container-sidebar">
            <ul>
                <li
                    v-for="(navItem, index) in navList"
                    @click="handleSideBarItemClick(navItem, index)"
                    :key="'sidebar-item-' + index">
                    <a href="javascript:void 0">
                        {{ navItem.title }}
                    </a>
                </li>
            </ul>

        </div>
    
    </container>
</template>
<style>

    .container-main{
        width: 100%;
        height: 100%;
    }

    .container-main-head{

        z-index: 666;

        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -ms-box-sizing: border-box;

        position: absolute;
        left: 0;
        top: 0;

        width: 100%;

        transition: padding-right 0.3s, height 0.3s;
    }

    .container-main-content{

        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -ms-box-sizing: border-box;

        overflow-x: hidden;
        overflow-y: auto;

        width: 100%;
        height: 100%;
        
    }

    .container-sidebar ul{

        padding: 0;
        margin: 0;

        list-style: none;
    }
    .container-sidebar ul li{
        transition: background-color 0.3s;

        border-bottom: 1px solid #ccc;
        
    }
    .container-sidebar ul li:hover{
        background-color: orangered;
    }

    .container-sidebar ul li a{

        white-space: nowrap;

        color: #111;

        text-decoration: none;

        display: block;
        text-align: center;

        line-height: 48px;



        transition: color 0.3s;

    }
    .container-sidebar ul li:hover a{
        color: white;
    }

    .footer{
        text-align: center;
        background-color: #111;
        padding: 24px 8px;

        color: #ccc;

        font-size: 14px;
    }
</style>
<script>

    import ScrollReveal from "scrollreveal";
    import { IEVersion } from "../utils/iechecker";
    import { scrollTo } from "../utils/scroller";

    import Container from "./Container.vue";
    import MyHeader from "../components/MyHeader.vue";
    import MyBanner from "./MyBanner.vue";
    import MyServices from "./MyServices.vue";
    import MyProjects from "./MyProjects.vue";
    import ContactUs from "./ContactUs.vue";

    function initView(ctx){
        if(window.innerWidth >= 700){
            ctx.showSideBar = false;
            ctx.showSideBarSwitch = false;
        }else{
            ctx.showSideBarSwitch = true;

        }

        if(window.innerWidth < 700){
            ctx.headerHeight = 60;
            ctx.bannerHeight = 250
        } 
        else if(window.innerWidth >= 700 && window.innerWidth < 1000){
            ctx.headerHeight = 80;
            ctx.bannerHeight = 400
        } 
        else{
            ctx.headerHeight = 100;
            ctx.bannerHeight = 550
        }


    }

    export default {
        data(){
            return {
                showSideBar: false,
                sideBarWidth: 100,
                headerHeight: 100,
                bannerHeight: 350,
                navList: [
                    {
                        targetId: "home",
                        title: "首页",
                        subTitle: "Home"
                    },
                    {
                        targetId: "services",
                        title: "服务范围",
                        subTitle: "Services"
                    },
                    {
                        targetId: "projects",
                        title: "项目介绍",
                        subTitle: "Projects"
                    },
                    {
                        targetId: "contact",
                        title: "联系我们",
                        subTitle: "Contact us"
                    },
                ],
                showSideBarSwitch: false,
                bannerList: [
                    {
                        imgURL: "imgs/banner_1.png",
                        active: true
                    },
                    {
                        imgURL: "imgs/banner_2.png",
                        active: false
                    },
                    {
                        imgURL: "imgs/banner_3.png",
                        active: false
                    }
                ]
            }
        },
        computed: {


        },
        methods: {
            toggleSideBar(){
                this.showSideBar = !this.showSideBar;
            },
            handleNavigationItemClick(navItem, index){

                let offsetTop = document.getElementById("home").offsetTop;

                scrollTo(this.$refs.mainContainer, document.getElementById(navItem.targetId).offsetTop - offsetTop, 15, 0.05);

            },
            handleSideBarItemClick(navItem, index){
                let offsetTop = document.getElementById("home").offsetTop;

                scrollTo(this.$refs.mainContainer, document.getElementById(navItem.targetId).offsetTop - offsetTop, 15, 0.05);
                this.showSideBar = false;
            }

        },
        components: {
            Container,
            MyHeader,
            MyBanner,
            MyServices,
            MyProjects,
            ContactUs
        },
        mounted: function() {
            
            let ctx = this;

            initView(ctx);
            window.onresize = function(e){
                
                initView(ctx);
                
            }

            if(IEVersion() > 9){
                window.sr = ScrollReveal({
                    container: ctx.$refs.mainContainer,
                    reset: true
                });
                sr.reveal('.services-list-item', 50);
                sr.reveal('.projects-intro-item', 50);
                sr.reveal('.contact-list-item', 50);
            }


            
        }
        
    }
</script>