<template>
  <section id="photos">
    <div class="joe_photos__type">
      <div class="joe_photos__type-title">
        <SvgIcon icon="fa:photo"></SvgIcon>
        照片
      </div>
      <nav class="joe_photos__filter">
        <ul class="filter">
          <li v-for="item in tabsData" :class="{'is-active': active === item.id}" @click="switchTo(item.id)"
              :key="item.id"><a
              href="javascript:;">{{ item.label }}</a></li>
        </ul>
      </nav>
    </div>
    <div class="img-wrapper" ref="container">
      <ul class="gallery-content" v-viewer>
        <li class="gallery-item" v-for="item in list">
          <div>
            <img src="" @click="openView(item)" @load="showImage(item)" ref="imgs" :data-src="item.src"
                 class="animate__animated" :class="[item.loaded ? 'animate__bounceIn' :''] " alt=""/>
          </div>
        </li>
      </ul>
    </div>
  </section>

</template>
<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";
import SvgIcon from '@/components/SvgIcon/index.vue'
import ImageView from './component/ImageView.vue'
import Images from './component/images.vue'

const list = ref([
  {src: "https://random-picture.vercel.app/api/?id=1", loaded: false},
  {src: "https://random-picture.vercel.app/api/?id=2", loaded: false},
  {src: "https://random-picture.vercel.app/api/?id=3", loaded: false},
  {src: "https://random-picture.vercel.app/api/?id=4", loaded: false},
  {src: "https://source.unsplash.com/random", loaded: false},
  {src: "https://cdn.shibe.online/shibes/43c12261bab77d48e2ba2516b6c54fa77324ecc6.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/2a74eca16ccd92dd1c0565be808ac29ee1be43be.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/94ca64fc93e67b0a7ca49a042a1031fa43080ff4.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/7d03e82f4773e0da6c37a87f888b47d20765ad2b.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/716320a0b3bfbec450ba422ebdd161799ff46b2b.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/64b36f5db49baea2b6e408c5c5daeca1b52ca80c.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/9443f84a88c1444e12acb05fb46464a01b9696ce.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/a83548324409e83cfbe5ffe5a992b7d87c17a2e2.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/5045c55626e4d9669dfedc6f21c9d6c6562e11b2.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/5840065e9cacefca00d197c1fed5ba05415dc5eb.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/7cfdc32979590a4a49f83907d19a1989d2026b56.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/8a2483effa9723c55edff5e30d65f02dca7b2b92.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/2eb7275c99aa2a7c3d1a17d3b12c117516233e48.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/c82768b6bfb6e40a3e69f4ce34aaf0eccd36b115.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/90bf1986bca793868b10dcb0b9ef776522cd8891.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/be8c69a8b82ad6e7e2e8ba1e992e892e2e9dada1.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/9ce61f35878f15a225980d77127790ac0b6f965f.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/d2ab2ecc653bab1b89ab743c643ca58f2af09f40.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/066e9615f203f08856c8e905a6abcb3e39df9e5d.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/d864e8b5ece1c49b8ffbd9ce357c4e1c5ec8a1c6.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/e2b79c89412083113a1892a4fe69f43584f926ae.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/ade237dd720be86350059bcb93e6c798bf3b4849.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/98cde84575d7fd6190c59872c29a532f983f6500.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/624367fddaf4502b75f718d336751ceeff596a29.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/dd3993760d69ea573599f290060a2559240f41a8.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/95d9ac69be743b3d7f88312a76889eb921e33973.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/b6e186e52e0c5ad4a11e50b691a68503f0b22397.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/e34a55934520fe21497bc5f12ba44290f79acb41.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/22fac5f4348e9ab8483a48f8eec1a18b543b09a6.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/ff9a8524853139486c0e8c2b925b0d88931f2871.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/fb9fe228756e317fbfa082ee3b99cad3d052c0d1.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/4fc5746d830d52fb04cadf1928521eb69c260640.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/9ab1326a44751308a8bd5f05036a66f6af095702.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/e256285788eb619511a497f4de45d5150413f0f2.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/989ef48c2edf1d63a9b9ef19946b93ad43dc3ab8.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/ef87dcb6e1e924a9f175818606ee1b60bc170621.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/d78f2e65c6f34d02a37d91f939a9d0aa10e5fd5b.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/bb08cb55c562d55e06f749d31d10ce788707ec2b.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/381bc81c14b8238f712f6092327ebcdcf5edb0a9.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/c2f38c42905aafeb95d01ec95eaf66efa6ec6ee8.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/4b4c661c56f086cd69d9ffdb18425988a56db9ee.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/11f248b4cc19fd82f22d4ff6a3222cf826fee858.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/83e7acb835564628954296c9c4902f6354e15911.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/6cdd74c696557dfac6aea2a029e7bf2e89018a98.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/c5699177f0fc8206974af54aab13234e962aeeff.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/1e440d8187b45348b3c81833bea543d449dc3700.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/7825dfded9dc80edccd3bf417010099154d7ab44.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/e70a038ea8362746fb5e99ead97ed212b3a99e54.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/7fc59f7b7273969794ae8f5bf6f7da8371853e02.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/1f0d6396d9334ed905a22095ee72145266d2bc0e.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/50c8f46fe079c00aca6cf91a36b418028c099e2e.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/4c4e885eebe2ffe56f21c1a3d8b41e0ffd24aa36.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/8c1e76cc0e34f42a1ade06ca40edb386d75dcd4c.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/c663e406a38689727d3719d43eb0fb55cac398d6.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/a9af2ffeee4f58afeeaf13003f80115a6c096437.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/098072652be0eb6ad9eb824dfa66c36774a73970.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/080be2af0807e7e976e28253381dc43affe4d29e.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/3743f59af254a14c1ffe90228a288ef925a873ca.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/85331ffca51f1dde4adfce288bb0a7c663d393f8.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/0dd84ad434527916a2359faad4f6ee1adf621a7e.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/7856ea7efb0fa4ed99f8eed28268f38a52bac4ba.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/1c418d66b27b3067736a082002b8a2cbc2f15a4e.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/47793ecc9d544ae57bf4cc778911b3b7ad156f9b.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/e979c8043e9709cdfc37e9e819a10656e997ccbc.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/c0367a25253f3b76b1e55d6df0e4f858be100c78.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/f2786d1e02a634e89fbbdc222a2a3cce04e250dc.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/db4ee11e0ddfd6cb0a5ae8a0bfee442dde752547.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/a00eecda53d5adb9d328f7eedb548c5b51e9f5a8.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/c5d0c07cb1895b45492ccde52ee98d336846cf50.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/a0165c10330e34972997f901b545aa4aeac9b240.jpg", loaded: false},
  {src: "https://cdn.shibe.online/shibes/8b22ebd24c96df4b1de2093530f39436a50d335d.jpg", loaded: false}
])
const tabsData = ref([
  {id: 'classroom', label: '班级'},
  {id: 'life', label: '生活'},
])
const active = ref('classroom')
const imgs = ref()
const imageViewRef = ref()

const switchTo = (id: string) => {
  active.value = id
}

const showImage = (item: any) => {
  item.loaded = true;
  let index = list.value.findIndex(img => img.src == item.src)
  imgs.value[index].style.visibility = 'visible'
  imgs.value[index].style.animationDelay = (Math.random() * 0.9 + 0.1).toFixed(1) + 's';
};

const ob = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      const img = entry.target as HTMLImageElement
      img.src = <string>img.dataset.src
      // console.log(img)
      ob.unobserve(img)
    }
  }
}, {
  threshold: 0
})

const openView = (item: any) => {
  const index = list.value.findIndex(img => img.src == item.src)
  imageViewRef.value.open(index)
}

onMounted(() => {
  // waterFall()
  imgs.value.forEach((img: any) => {
    ob.observe(img)
  })
})
</script>
<style lang="scss" scoped>
.joe_photos__type {
  position: relative;
  margin-bottom: 15px;
  padding: 60px 15px 15px;
  background: var(--background);
  border-radius: var(--radius-wrap);
  -webkit-box-shadow: var(--box-shadow);
  box-shadow: var(--box-shadow);
}

.joe_photos__type-title {
  position: absolute;
  top: 15px;
  left: -10px;
  height: 30px;
  padding: 0 12px;
  color: #fff;
  font-weight: 500;
  line-height: 30px;
  background: var(--theme);
  border-radius: 2px 2px 2px 0;
  -webkit-box-shadow: 2px 5px 10px rgba(49, 58, 70, .15);
  box-shadow: 2px 5px 10px rgba(49, 58, 70, .15);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 14px;

  &::before {
    position: absolute;
    bottom: -10px;
    left: -10px;
    border-color: var(--theme) transparent transparent;
    border-style: solid;
    border-width: 10px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    content: "";
  }
}

.joe_photos__filter {
  position: relative;
  top: 12px;
  display: block;

  .filter {
    li {
      display: inline-block;
      margin: 0 20px 12px 0;
      position: relative;

      a {
        display: block;
        color: var(--main);
        font-size: 14px;
      }

      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 3px;
        background-color: var(--theme);
        border-radius: 3px;
        left: 50%;
        transition: .3s ease;
      }

      &:not(.is-active):hover {
        color: var(--theme);
      }

      &:not(.is-active):hover:after {
        left: 0%;
        width: 100%;
      }

      &.is-active::after {
        left: 0%;
        width: 100%;
      }

      &.is-active {
        color: var(--theme);

        a {
          font-weight: 500;
        }
      }
    }
  }
}

.imgss {
  opacity: 0;
}

.container {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
}


.img-wrapper {
  .gallery-content {
    display: flex;
    flex-wrap: wrap;

    &::after {
      content: '';
      flex-grow: 999999999;
    }

    li::marker {
      content: '';
    }

    .gallery-item {
      background-size: cover;
      background-position: center;
      flex-grow: 1;
      margin: 5px;
      height: 210px;
      min-width: 300px;
      div{
        transition: all 0.3s ease-in;
        border-radius: var(--radius-wrap);
        &:hover {
          cursor: url("/link.cur"), auto !important;
        }
      }

      img {
        height: 210px;
        object-fit: cover;
        max-width: 100%;
        min-width: 100%;
        vertical-align: bottom;
        border-radius: var(--radius-wrap);
        visibility: hidden;
      }
    }


  }
}

</style>