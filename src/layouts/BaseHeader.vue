<template>
  <header class="header">
    <div class="top">
      <ul class="top-bar">
        <li :class="['item', current == '/dashboard' ? 'active': '']">
          <router-link to="/dashboard">首页</router-link>
        </li>
        <li :class="['item', current == '/homework/completion' ? 'active': '']">
          <router-link to="/homework/completion">作业情况</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>
<script lang="ts" setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";

const route = useRoute()
const current = ref()

onMounted(() => {
  current.value = route.fullPath
})

</script>
<style scoped lang="scss">
.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .2);
  color: var(--text-color);

  .top {
    width: 1200px;

    .top-bar {
      display: flex;
      align-items: center;
      height: 100%;

      .active {
        color: var(--theme);
      }

      .item {
        position: relative;
        height: 100%;
        line-height: 60px;
        padding: 0 8px;
        margin-right: 10px;
        font-size: 15px;
        cursor: url("/link.cur"), auto !important;
        &.active::after {
          opacity: 1;
          transform: scaleX(1);
        }
        &:hover {
          color: var(--theme);

          &::after {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        &::after {
          opacity: 0;
          position: absolute;
          bottom: 0;
          left: 6px;
          right: 6px;
          content: "";
          height: 3px;
          background-color: var(--theme);
          border-radius: 6px 6px 0 0;
          transition: opacity .5s, transform .5s, -webkit-transform .5s;
        }
      }
    }
  }
}

</style>


