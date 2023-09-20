<template>
  <div class="container">
    <aside class="aside">
      <User class="aside_item"/>
      <Article class="aside_item"/>
      <tags class="aside_item" ></tags>
      <CountDown class="aside_item"></CountDown>
    </aside>
    <main class="main">
      <Banner/>
      <List/>
      <div class="more">
        <div >查看更多</div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import User from './component/User.vue'
import Article from "@/views/dashboard/component/Article.vue";
import Banner from "@/views/dashboard/component/Banner.vue";
import List from "./component/List.vue"
import Tags from './component/Tags.vue'
import CountDown from "@/views/dashboard/component/CountDown.vue";
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}

.main {
  flex: 1;
  border-radius: var(--radius-wrap);
}
.more {
  display: flex;
  justify-content: center;
  margin-top: 15px;

  div {
    width: 120px;
    text-align: center;
    height: 32px;
    background-color: var(--background);
    border-radius: 16px;
    box-shadow: 0 0px 10px -5px #949494;
    color: #606266;
    font-size: 14px;
    line-height: 32px;
    &:hover {
      color: var(--theme);
    }
  }
}

.aside {
  margin-right: 15px;
  padding-bottom: 15px;

  .aside_item {
    position: relative;
    width: 280px;
    margin-bottom: 15px;
    border-radius: var(--radius-wrap);
    -webkit-box-shadow: var(--box-shadow);
    box-shadow: var(--box-shadow);
    overflow: hidden;
    background-color: var(--background);
  }
}

</style>