<template>

    <div class="projects">
        <divider title="我们的项目"/>
        <div class="projects-intro">
            <item-b 
                class="projects-intro-item"
                v-for="(pjItem, index) in pjList"
                :key="'projects-item-' + index"
                :title="pjItem.title"
                :bgURL="pjItem.bgURL"
                :content="pjItem.content"/>
        </div>

        <div class="projects-details">
            <img src="imgs/business.png"/>
        </div>

    </div>
            
</template>
<style>

    .projects{
        margin-top: 64px;
    }

    .projects-intro{
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -ms-box-sizing: border-box;
        -moz-box-sizing: border-box;

        padding: 0 8px;

        display: flex;
        flex-flow: row wrap;

        justify-content: center;

        margin: 16px 0 32px 0;

        text-align: center;

    }

    .projects-intro-item{

        display: inline-block;

        margin: 8px;

        flex: 1;

        min-width: 200px;
        max-width: 350px;

    }

    .projects-details{
        width: 100%;
    }

    .projects-details img{
        max-width: 100%;
        width: 100%;
    }
</style>
<script>

    import Divider from "../components/Divider.vue";
    import ItemB from "../components/ItemB.vue";
    
    export default {
        data(){
            return {
                pjList: [
                    {
                        title: "社交电商旧模式",
                        content: "进入社交媒体参与到消费者的社交中创造口碑、推广产品。",
                        bgURL: "imgs/social_business_1.jpg",
                    },
                    {
                        title: "社交电商新模式",
                        content: "介入社交礼品赠送的环节，提高用户的社交效率。",
                        bgURL: "imgs/social_business_2.jpg",
                    },
                ]

            }
        },
        computed: {


        },
        methods: {

        },
        components: {
            Divider,
            ItemB
        }
        
    }
</script>