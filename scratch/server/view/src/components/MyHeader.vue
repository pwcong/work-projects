<style lang="scss">
.header {
  width: 100%;
  background-color: #25aff4;
  box-shadow: 0 1px 5px #ccc;

  .header-wrap {
    box-sizing: border-box;
    padding: 0 24px;

    max-width: 1000px;
    margin: 0 auto;
    font-size: 0;

    .logo {
      vertical-align: middle;
      max-height: 40px;
    }
  }
}
</style>

<template>
  
    <div class="header">

        <div class="header-wrap" 
            :style="{
                height: height,
                lineHeight: height
            }">
            <a href="/">
                <img :src="logo" alt="Logo" class="logo">
            </a>

            <slot name="navs"></slot>
            <slot name="tools"></slot>

        </div>

    </div>

</template>

<script>
import logo from "../assets/imgs/logo.png";

export default {
  props: {
    height: {
      type: String,
      default: "58px"
    }
  },

  data() {
    return {
      logo
    };
  }
};
</script>
