<template>
  <Card title="倒计时" icon="ri:hourglass-2-fill">
    <div class="countText">今日已经过去<span>9</span>小时</div>
    <a-progress
        :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
        :percent="70"

    />
    <div class="countText">今日已经过去<span>9</span>小时</div>
    <a-progress
        :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
        :percent="39"
    />
    <div class="countText">今日已经过去<span>9</span>小时</div>
    <a-progress
        :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
        :percent="49"
    />
    <div class="countText">今日已经过去<span>9</span>小时</div>
    <a-progress
        :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
        :percent="59"
    />

  </Card>
</template>

<script setup lang="ts">
import Card from '@/components/Card/index.vue'
</script>

<style lang="scss" scoped>
.countText {
  color: var(--minor);
  font-size: 12px;

  span {
    color: var(--theme)
  }
}
</style>