<style lang="scss">
.home {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 16px;
  margin-bottom: 16px;

  .home-wrap {
    background-color: white;

    box-sizing: border-box;
    padding: 24px 48px;

    box-shadow: 0 1px 2px #ccc;

    .timeline-item {
      cursor: pointer;
      color: #333;
    }

    .timeline-datetime {
      white-space: nowrap;
      font-size: 11px;
      margin-right: 24px;
      margin-top: 4px;
      position: relative;
      top: -3px;
    }

    .timeline-id {
      margin-top: 4px;
      white-space: nowrap;
      display: inline-block;
      background-color: #25aff4;
      color: white;
      font-size: 13px;
      padding: 4px 6px;
      border-radius: 16px;
    }

    .timeline-content {
      margin-top: 4px;
      margin-right: 16px;
      white-space: nowrap;
    }
  }

  .loadmore {
    cursor: pointer;
    margin-top: 16px;
    background-color: white;
    box-shadow: 0 1px 2px #ccc;
    box-sizing: border-box;
    padding: 8px 0;
    text-align: center;
    font-size: 14px;

    transition: background-color 0.2s;

    user-select: none;

    &:hover {
      background-color: #ddd;
    }
  }
}
</style>

<template>
    <div class="home">

        <div class="home-wrap" v-show="timelines.length > 0">
            <time-line 
                v-for="(item, index) in timelines" 
                :size="item.size"
                :padding="item.size === 'large' ? '16px' : '8px 16px'"
                :key="'timeline-item-' + index">
                <div slot="content" class="timeline-item" @click="handleTimeLineItemClick(item)">
                    <span class="timeline-datetime" v-if="item.date">
                        {{item.date}}
                    </span>
                    <span 
                        class="timeline-content"
                        :style="{
                            fontSize: item.size === 'large' ? '26px' : '18px'
                        }">
                        {{item.size === 'large' ? item.title : (item.author + ' - ' + item.title)}}
                    </span>
                    <span class="timeline-id" v-if="item.id">
                        ID: {{item.id}}
                    </span>
                </div>
            </time-line>
        </div>

        <div 
            @click="handleLoadMore"
            class="loadmore">
            {{loading ? '加载中...' : (hasMore ? '加载更多~' : 'ㄟ( ▔, ▔ )ㄏ')}}
        </div>

    </div>
</template>

<script>
import TimeLine from "../components/TimeLine.vue";

import consts from "../consts";
import types from "../store/types";

import projectAPI from "../network/api/project";

export default {
  methods: {
    handleLoadMore(e) {

      if (this.$store.state.project.loading || !this.$store.state.project.hasMore) {
        return;
      }

      this.$store
        .dispatch(types.PROJECT_ACTOPM_GETLIST)
        .then(res => {})
        .catch(err => {});
    },
    handleTimeLineItemClick(item) {
      if (!item.id) {
        return;
      }
      window.open(
        `${consts.URL_PLAYER}?id=${item.id}&author=${item.author}&title=${item.title}`,
        "_blank"
      );
    }
  },
  computed: {
    timelines() {
      return this.$store.getters.timelines;
    },
    hasMore() {
      return this.$store.state.project.hasMore;
    },
    loading() {
      return this.$store.state.project.loading;
    }
  },
  components: {
    TimeLine
  },
  mounted() {
    this.$store
      .dispatch(types.PROJECT_ACTOPM_GETLIST)
      .then(res => {})
      .catch(err => {});
  }
};
</script>
