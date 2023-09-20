<template>
  <a-image-preview-group>
    <a-image v-for="item in picList"  :src="item.src" />
  </a-image-preview-group>
</template>

<script setup lang="ts">
const props = defineProps({
  picList: {type: Array}
})
</script>

<style scoped>

</style>