<template>
    <Header/>
    <section class="section">
      <router-view/>
    </section>

</template>
<script lang="ts" setup>
import Header from './BaseHeader.vue'

</script>
<style scoped>
.section {
  width: 1140px;
  margin: 20px auto 30px;
  padding: 0 15px;
}
</style>