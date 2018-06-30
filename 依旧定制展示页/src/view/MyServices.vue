<template>

    <div class="services">

        <divider title="我们的服务"/>

        <div class="services-intro">
            我们致力于为用户解决礼品赠送 & 接收过程中各种令人头痛的问题。
        </div>

        <div class="services-list">
            <item-a
                v-for="(svItem, index) in svList"
                :key="'services-list-item-' + index"
                :icon="svItem.icon"
                :title="svItem.title"
                :subTitles="svItem.subTitles"
                class="services-list-item"/>
        </div>

        <div class="services-banner">
            以上问题都能通过<span>依旧有礼</span>平台解决，让社交不再困难。
        </div>

    </div>
            
</template>
<style>

    .services{
        margin-top: 64px;
    }

    .services-intro{

        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -ms-box-sizing: border-box;

        padding: 0 8px; 


        text-align: center;
        font-size: 16px;

        color: #aaa;
    }

    .services-list{

        margin-top: 48px;

        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -ms-box-sizing: border-box;

        padding: 0 8px; 

        position: relative;

        
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;

    }

    .services-list-item{

        min-width: 320px;
        height: 250px;

        flex: 1;


    }

    .services-banner{

        font-size: 18px;

        background-color: #333;

        color: white;

        text-align: center;

        padding: 24px 32px;

    }
    .services-banner span{
        color: orangered;

        margin: 0 4px;

        font-size: 24px;
    }

</style>
<script>


    import Divider from "../components/Divider.vue";
    import ItemA from "../components/ItemA.vue";

    export default {
        data(){
            return {
                
                svList: [
                    {
                        icon: "imgs/heart.png",
                        title: "对方是否喜欢？",
                        subTitles: [
                            {
                                content: "不喜欢的礼品可在平台内处理，转赠/回购，完全不用担心。",
                                key: "services-subtitles-1"
                            }
                        ]
                    },
                    {
                        icon: "imgs/needs.png",
                        title: "对方是否需要？",
                        subTitles: [
                            {
                                content: "不需要可以在礼品账户先放着，有需求再点提货。",
                                key: "services-subtitles-2"
                            }
                        ]
                    },
                    {
                        icon: "imgs/smile.png",
                        title: "带多了难拿带少了小气？",
                        subTitles: [
                            {
                                content: "选-买-送-收 全过程都在手机上操作，不需要考虑礼品的体积空间，想送多少都不难拿。",
                            }
                        ]
                    },
                    {
                        icon: "imgs/gift.png",
                        title: "拜访亲戚朋友忘了带礼品？",
                        subTitles: [
                            {
                                content: "一分钟内完成 选-买-送-收 过程，化解“两手空空”的尴尬。",
                            }
                        ]
                    },
                    {
                        icon: "imgs/more.png",
                        title: "过年过节礼品太多无法处理？",
                        subTitles: [
                            {
                                content: "账户内礼品再多，都可以操作转赠/回购，礼品太多送给别人，不送也能换成现金。",
                            }
                        ]
                    }
                ]
                
            }
        },
        computed: {


        },
        methods: {

        },
        components: {
            Divider,
            ItemA
        },
        mounted: function(){
            



        }
        
    }
</script>