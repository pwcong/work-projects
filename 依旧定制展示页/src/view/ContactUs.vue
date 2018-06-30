<template>

    <div class="row-contact">

        <divider title="联系我们" color="white" line-color="#666"/>
        
        <div class="contact-list">
            <item-c 
                class="contact-list-item"
                v-for="(ctItem, index) in ctList"
                :key="'contact-item-' + index"
                :content="ctItem.content"
                :iconURL="ctItem.iconURL"/>
        </div>

    </div>
            
</template>
<style>

    .row-contact{

        padding: 36px 0;

        background-color: #333;
    }

    .contact-main{

        width: 100%;

        background-size: cover;
        background-position-x: 50%;
        background-position-y: 50%;
        background-repeat: no-repeat;

        color: white;

    }

    
    .contact-list{
        
        
        box-sizing: border-box;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;

        text-align: center;
    }

    .contact-list-item{
        text-align: left;
        width: 220px;
        
        
        margin: 4px 0;

        display: inline-block;
    }

</style>
<script>

    import Divider from "../components/Divider.vue";
    import ItemC from "../components/ItemC.vue";
    
    
    export default {
        data(){
            return {
                ctList: [
                    {
                        iconURL: "imgs/qq.png",
                        content: "2208189821"
                    },
                    {
                        iconURL: "imgs/phone_1.png",
                        content: "13570400342 张先生"
                    },
                    {
                        iconURL: "imgs/phone_2.png",
                        content: "0000-00000000"
                    },
                    {
                        iconURL: "imgs/mail.png",
                        content: "yijiuyouli@163.com"
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
            ItemC
        }
        
    }
</script>