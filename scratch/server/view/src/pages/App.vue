<style lang="scss">
html,
body {
  font-family: "Microsoft YaHei", sans-serif;
  margin: 0;
  padding: 0;

  position: relative;
  width: 100%;
  height: 100%;
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #eee;

  .header {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99999;

    .navs {
      display: inline-block;
      // line-height: 58px;

      li {
        list-style: none;
        vertical-align: middle;
        display: inline-block;
        font-size: 18px;

        a {
          color: white;
          display: inline-block;
          text-decoration: none;
          padding: 0 24px;

          transition: background-color 0.2s, color 0.2s;

          &:hover {
            background-color: white;
            color: #25aff4;
          }
        }
      }
    }

    .tools {
      float: right;
      height: 100%;

      div {
        display: inline-block;
        width: 28px;
        height: 28px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        vertical-align: middle;
        cursor: pointer;
      }

    }

    .tools-active div {
      animation: anim-rotate 1.5s linear infinite;
    }
  }

  .main {
    width: 100%;
    height: 100%;
    overflow: auto;

    box-sizing: border-box;
  }
}

@keyframes anim-rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}
</style>

<template>
    <div class="container">
        <my-header class="header" :height="headerHeight">

          <ul slot="navs" class="navs">
            <li>
              <a 
                href="https://scratch.mit.edu/" 
                target="_blank">
                官网
              </a>
            </li>

            <li><a href="/editor/index.html" target="_blank">创作</a></li>
          </ul>

          <div 
            slot="tools" 
            :class="{
              tools: true,
              'tools-active': loading
            }">

            <div 
              @click="handleRefreshBtnClick"
              :style="{
                backgroundImage: 'url(' + refreshIcon + ')',
              }">
            </div>

          </div>

        </my-header>

        <div class="main" 
            :style="{
                paddingTop: headerHeight
            }">
            <router-view></router-view>
        </div>

    </div>
</template>



<script>
import MyHeader from "../components/MyHeader.vue";

import types from "../store/types";

import refreshIcon from "../assets/imgs/icon_refresh.png";

export default {
  data() {
    return {
      headerHeight: "58px",
      refreshIcon,
      loading: false
    };
  },
  methods: {
    handleRefreshBtnClick(e) {
      if (this.loading) {
        return;
      }

      this.loading = true;

      this.$store
        .dispatch(types.PROJECT_ACTOPM_REFRESH)
        .then(data => {
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
        });
    }
  },
  components: {
    MyHeader
  }
};
</script>
