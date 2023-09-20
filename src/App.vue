<template>
  <a-config-provider
      :theme="{
      token: {
        colorPrimary: '#fb6c28',
      },
    }"
  >
    <router-view/>
  </a-config-provider>
</template>

<style>
#app {
  cursor: url("/normala.cur"), auto !important;
}

a {
  cursor: url("/link.cur"), auto !important;
}

main {
  display: flex;
  justify-content: center;
}
</style>
<script setup lang="ts">
</script>