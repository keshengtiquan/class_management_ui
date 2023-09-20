<template>
  <header class="joe_header">
    <div class="joe_header__above">
      <div class="joe_container">
        <a class="avatar">
          <img src=""/>
        </a>
        <span class="space"></span>
        <nav class="nav">
          <div v-for="item in menus" :class="['nav-item', item.key == current ? 'is-active':'']" :key="item.key"
               @click="to(item.key)">
            {{ item.label }}
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import {ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";

const current = ref('')
const route = useRoute()
const router = useRouter()
const menus = ref([
  {label: '首页', key: '/dashboard'},
  {label: '优秀作文', key: '/composition/index'},
  {label: '优秀作业', key: '/homework/index'},
  {label: '照片', key: '/photos/index'},
  {label: '诗词', key: '/poetry/index'},
])
const indicator = ref()
const to = (key: any) => {
  router.push(key)
}
watch(() => route.path, (newValue) => {
  current.value = newValue
}, {immediate: true})
</script>
<style scoped lang="scss">
.joe_header {
  position: relative;
  z-index: 100;
  height: 60px;

  .joe_header__above {
    position: fixed;
    top: 0;
    z-index: 6;
    width: 100%;
    height: 60px;
    background: var(--menu-bg-color);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .2);
    margin: 0 auto;
    display: flex;
    justify-content: center;

    .joe_container {
      max-width: 1200px;
      display: flex;
      height: 60px;
      align-items: center;
      width: 100%;
      padding: 0 15px;

      .avatar {
        background-color: red;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      .space {
        margin: 0 14px;
        width: 1px;
        height: 20px;
        background-color: #ebeef5;
      }
    }
  }
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-item {
  padding: 0 8px;
  text-decoration: none;
  transition: .3s;
  margin-right: 10px;
  z-index: 1;
  position: relative;
  height: 60px;
  line-height: 60px;
  &:hover {
    cursor: url("/link.cur"), auto !important;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 0;
    height: 3px;
    background-color: var(--theme);
    border-radius: 8px 8px 0 0;
    opacity: 0;
    transition: .5s ease;
  }

  &:not(.is-active):hover {
    color: var(--theme);
  }

  &:not(.is-active):hover:after {
    left: 10%;
    width: 80%;
    opacity: 0.5;
  }

  &.is-active::after {
    left: 10%;
    width: 80%;
    opacity: 1;
  }

  &.is-active {
    color: var(--theme);
  }
}

//.nav-item:not(.is-active):hover:after {
//  left: 0;
//  width: 100%;
//  opacity: 1;
//
//}


</style>


