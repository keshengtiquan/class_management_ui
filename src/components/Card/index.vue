<template>
  <section>
    <div class="joe_aside__item-title">
      <SvgIcon :icon="props.icon" class="hot"></SvgIcon>
      <span>{{title}}</span>
    </div>
    <div class="joe_aside__item-contain">
      <slot/>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref} from "vue";
import SvgIcon from "@/components/SvgIcon/index.vue";

const props = defineProps({
  title: {type: String,default: ''},
  icon: {type: String as any}
})
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


</style>