<template>
  <div v-if="show" class="container-view animate__animated animate__fadeIn">
    <div class="bg"></div>
    <div class="inner">
      <div class="top">
        <div class="info-bar" ref="infoBarRef">
          {{ currentImg + 1 }}/{{ picList.length }}
        </div>
        <div class="tool-bar" ref="toolBarRef">
          <SvgIcon icon="icons8:search" @click="blowUp"></SvgIcon>
          <SvgIcon icon="ic:baseline-download"></SvgIcon>
          <SvgIcon icon="material-symbols:grid-on-sharp"></SvgIcon>
          <SvgIcon icon="pajamas:close" @click="close"></SvgIcon>
        </div>
      </div>
      <div class="navigation" ref="navigationRef">
        <button class="left" @click="viewPrev">
          <SvgIcon icon="lucide:move-left"></SvgIcon>
        </button>
        <button class="right" @click="viewNext">
          <SvgIcon icon="lucide:move-right"></SvgIcon>
        </button>
      </div>
      <div class="photo" ref="photoRef" v-on-click-outside="onClickOutsideHandler">
        <span v-if="isLoading">Loading</span>
        <img v-else  ref="imgRef" @load="photoLoad" :data-src="picList[currentImg].src" :src="picList[currentImg].src">
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {nextTick, onMounted, ref, onUnmounted, watch} from "vue";
import SvgIcon from '@/components/SvgIcon/index.vue'
import {vOnClickOutside} from '@vueuse/components'
import {useImage, useMouseInElement} from '@vueuse/core'

const show = ref(false)
let _overflowBackup = ''
const currentImg = ref<number>(0)
const infoBarRef = ref()
const toolBarRef = ref()
const navigationRef = ref()
const imgRef = ref()
const photoRef = ref()
const isBlowUp = ref(false)
const avatarUrl = 'https://place.dog/300/200'
const {isLoading} = useImage({src: avatarUrl})


const props = defineProps({
  picList: {type: Array<any>, default: () => []}
})

const onClickOutsideHandler: any = [
  (ev: any) => {
    if (ev.isTrusted) {
      close()
    }
  },
  {ignore: [infoBarRef, toolBarRef, navigationRef]}
]

const open = (index: number) => {
  currentImg.value = index
  _overflowBackup = window.getComputedStyle(document.body).overflow
  document.body.style.overflow = 'hidden'
  show.value = true
}
const close = () => {
  document.body.style.overflow = _overflowBackup
  show.value = false
}
const viewNext = () => {
  if (currentImg.value == props.picList?.length - 1) {
    return
  }
  imgRef.value.src = avatarUrl
  currentImg.value += 1
}
const viewPrev = () => {
  if (currentImg.value == 0) {
    return
  }
  currentImg.value -= 1
}
const photoLoad = () => {
  // imgRef.value.src = imgRef.value.dataset.src

  // let w = imgRef.value.naturalWidth
  // let h = imgRef.value.naturalHeight
  // console.log(w / clientWidth.value)
  // let a = (h / w).toFixed(2)
  // photoRef.value.style.width = w * Number(a) + 'px'
  // photoRef.value.style.height = h * Number(a) + 'px'


}

const blowUp = () => {
  let nw = imgRef.value.naturalWidth
  let nh = imgRef.value.naturalHeight
  let w = imgRef.value.width
  let h = imgRef.value.height
  if (isBlowUp.value) {
    nextTick(() => {
      imgRef.value.style.width = nw + 'px'
      imgRef.value.style.height = nh + 'px'
      console.log(imgRef.value.width)
      console.log(imgRef.value.height)
    })
  } else {
    nextTick(() => {
      imgRef.value.style.width = w + 'px'
      imgRef.value.style.height = h + 'px'
    })
  }
  isBlowUp.value = !isBlowUp.value
}

const handleScroll = (e: any) => {
  let transform = imgRef.value.style.transform
  let zoom = transform.indexOf("scale") != -1 ? +transform.split("(")[1].split(")")[0] : 1
  zoom += e.wheelDelta / 1200
  if(zoom > 0.1 && zoom < 5){
    imgRef.value.style.transform = "scale(" + zoom + ")"
  }
}
watch(show, (newShow) => {
  if (!newShow) {
    window.removeEventListener('wheel', handleScroll);
  } else {
    window.addEventListener('wheel', handleScroll)
  }
}, {immediate: true});


onMounted(() => {
  window.addEventListener('wheel', handleScroll)
})

onUnmounted(() => {
  console.log('组件卸载')
  window.removeEventListener('wheel', handleScroll)
})

defineExpose({open, close})
</script>

<style lang="scss" scoped>
.container-view {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 700;
  top: 0;

  .bg {
    background-color: #1e1e1e;
    opacity: 0.9;
    height: 100%;
  }

  .inner {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    cursor: url("/normala.cur"), auto !important;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    .top {
      display: flex;
      justify-content: space-between;

      .info-bar {
        color: #ccc;
        font-size: 13px;
        -webkit-font-smoothing: subpixel-antialiased;
        height: 44px;
        line-height: 44px;
        min-width: 44px;
        mix-blend-mode: difference;
        padding: 0 10px;
        pointer-events: none;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        z-index: 998;
      }

      .tool-bar {
        height: 44px;
        line-height: 44px;
        background-color: #252525;
        z-index: 998;

        svg {
          color: #ccc;
          width: 44px;
          cursor: url("/link.cur"), auto !important;

          &:hover {
            color: #fff;
          }
        }
      }
    }

    .navigation {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      justify-content: space-between;
      z-index: 998;

      svg {
        color: #fff;
      }
      Button {
        width: 38px;
        height: 38px;
        background-color: #252525;
      }
    }
    .photo {
      flex: 1;
      align-self: center;
      img {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        transition: all 0.3s ease;
        width: auto;
        height: auto;
        //pointer-events: none;
      }
    }
  }
}


</style>