<template>
  <section>
    <div class="joe_aside__item-title">
      <SvgIcon icon="mdi:hot" class="hot"></SvgIcon>
      <span>最新作文</span>
    </div>
    <div class="joe_aside__item-contain">
      <div class="list">
        <div class="item" v-for="item in data" :key="item.title">
          <router-link class="link" to="">{{item.title}}</router-link>
          <SvgIcon class="icon-link" icon="dashicons:admin-links"></SvgIcon>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref} from "vue";
import{ Icon } from '@iconify/vue';
import SvgIcon from "@/components/SvgIcon/index.vue";

const data = ref([
  {title: '零碎知识记录'},
  {title: '工具安装及配置'},
  {title: '工具安装及配置'},
  {title: '工具安装及配置'},
])
</script>

<style lang="scss" scoped>
.joe_aside__item-title {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  height: 45px;
  line-height: 45px;
  padding: 0 15px;
  color: var(--classF);
  border-bottom: 1px solid var(--classC);
}
.hot {
  color: var(--theme);
  font-size: 24px;
}
.joe_aside__item-contain {
  position: relative;
  padding: 15px;
}
.list {
  padding-top: 1px;
  .item {
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:last-child{
      margin-bottom: 0;
    }
    .icon-link {
      color: var(--minor);
      transition: .3s ease-in;
    }
    &:hover {
      color: var(--theme);
      .icon-link {
        rotate: -135deg;
        color: var(--theme);
      }
      .link{
        color: var(--theme);
      }
    }
    &:hover .link::after {
      width: 100%;
      
    }
    .link {
      color: var(--link-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      position: relative;
      line-height: 20px;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        background: var(--theme);
        -webkit-transition: all .35s;
        transition: all .35s;
      }
    }
  }
}

</style>