<template>
  <Icon :icon="props.icon" class="icon"></Icon>
</template>

<script setup lang="ts">
import{ Icon } from '@iconify/vue';
const props = defineProps({
  icon: {type: String}
})
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
  vertical-align: -0.15em;
  outline: none;
  cursor: url("/link.cur"), auto !important;
}
</style>