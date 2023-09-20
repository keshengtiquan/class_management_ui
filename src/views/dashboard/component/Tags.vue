<template>
  <Card  title="标签" icon="ant-design:tags-outlined">
    <a-tag v-for="item in 10" :key="item"  class="mb-1">green</a-tag>
  </Card>
</template>

<script setup lang="ts">
import Card from '@/components/Card/index.vue'
import {ref} from "vue";
const tagsData = ref([
])
</script>

<style scoped>

</style>