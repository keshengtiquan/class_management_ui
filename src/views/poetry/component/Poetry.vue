<template>
  <div class="poetry">
    <div class="title">{{poetry.title}}</div>
    <div class="author">{{poetry.author}}</div>
    <p class="row" v-for="item in poetry?.content">
      {{item}}
    </p>
  </div>
</template>

<script setup lang="ts">

type poetryType = {
  title: string,
  author: string,
  content: string,
  prologue?: string
}

const props = defineProps({
  poetry: {type: Object as ()=>poetryType }
})

console.log(props.poetry.content)

</script>

<style lang="scss" scoped>
.poetry {
  background-color: #fff;
  padding: 10px 20px;
  margin-bottom: 15px;
  border-radius: var(--radius-wrap);
  box-shadow: var(--box-shadow);
  .title {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
  }
  .author {
    font-size: 12px;
    color: var(--link-color);
    margin: 5px 0  15px 0;
  }
  .row {
    font-size: 14px;
    margin-bottom: 15px;
    color: var(--classF)
  }
}
</style>