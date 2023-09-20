<template>
  <section class="banner">
    <div class="swiper">
      <a-carousel arrows effect="fade" autoplay>
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
            <left-circle-outlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: 10px">
            <right-circle-outlined />
          </div>
        </template>
        <div v-for="item in data" :key="item.src">
          <img :src="item.src" alt="" width="785" height="360">
        </div>
      </a-carousel>
    </div>

  </section>

</template>

<script setup lang="ts">
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import {ref} from "vue";

const data =ref([
  {src: 'https://random-picture.vercel.app/api/?id=10'},
  {src: 'https://random-picture.vercel.app/api/?id=11'},
  {src: 'https://random-picture.vercel.app/api/?id=12'},
  {src: 'https://random-picture.vercel.app/api/?id=13'},
  {src: 'https://random-picture.vercel.app/api/?id=14'},
  {src: 'https://random-picture.vercel.app/api/?id=15'},
  {src: 'https://random-picture.vercel.app/api/?id=16'},
])


</script>

<style lang="scss" scoped>
.banner {
  padding: 15px 15px 5px 15px;
  background-color: var(--background);
  border-radius: 8px 8px 0 0;
  .swiper {
    width: 785px;
  }
}

:deep(.slick-slide) {
  text-align: center;
  height: 360px;
  line-height: 360px;
  //background: #364d79;
  overflow: hidden;
  border-radius: var(--radius-wrap);
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}

</style>