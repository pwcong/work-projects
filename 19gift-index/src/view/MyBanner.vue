<template>
    <div 
        class="banner"
        :style="{
            height: height + 'px'
        }">

        <div 
            v-for="(bannerItem, index) in bannerList"
            :key="'banner-item-' + index"
            :class="{
                'banner-item': true,
                'banner-item-active': bannerItem.active
            }"
            :style="{
                backgroundImage: 'url(' + bannerItem.imgURL + ')'
            }">
        </div>

    </div>

</template>

<style>

    .banner{
        width: 100%;
        position: relative;

        transition: height 0.3s;
    }

    .banner-item{
        left: 0;
        top: 0;
        position: absolute;

        width: 100%;
        height: 100%;

        background-size: cover;
        background-repeat: no-repeat;
        background-position-x: 50%;
        background-position-y: 50%;

        opacity: 0;

        transition: opacity 0.3s;

    }
    .banner-item-active{
        opacity: 1;
    }

</style>

<script>
    export default {

        props: {
            bannerList: {
                type: Array
            },
            height: {
                type: Number,
                default: 350
            },
            duration: {
                type: Number,
                default: 5000
            }
        },
        mounted(){

            let ctx = this;
            let index = 0;

            if(ctx.bannerList.length > 0){

                ctx.bannerTimer = setInterval(function(){

                    index++;
                    index%=ctx.bannerList.length;

                    ctx.bannerList.forEach(function(bannerItem, i){

                        if(i == index){
                            bannerItem.active = true;
                        }else{
                            bannerItem.active = false;

                        }



                    });

                }, ctx.duration);

            }

        },
        beforeDestroy(){


        }
    }
</script>


