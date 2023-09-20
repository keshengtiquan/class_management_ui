<template>
  <section class="list">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="最新作文"></a-tab-pane>
      <a-tab-pane key="2" tab="热门作文" force-render></a-tab-pane>
      <a-tab-pane key="3" tab="最近更新"></a-tab-pane>
      <a-tab-pane key="4" tab="最多点赞"></a-tab-pane>
    </a-tabs>
    <ul>
      <li class="list-item" v-for="item in data" :key="item.image">
        <div class="list-left">
          <SvgIcon class="img-icon" icon="ant-design:picture-outlined"></SvgIcon>
          <img class="list-img" :src="item.image" alt=""/>
        </div>
        <div class="list-right" >
          <span class="title">{{item.title}}</span>
          <p class="describe">{{item.paragraph}}</p>
          <div class="list-bottom">
            <ul class="bottom-text">
              <li>{{item.createDate}}</li>
              <li>
                <SvgIcon icon="ph:eye"></SvgIcon>
                {{item.articleView}}
              </li>
              <li>
                <SvgIcon icon="eva:message-circle-outline"></SvgIcon>
                {{item.leaveWord}}
              </li>
              <li>
                <SvgIcon icon="uiw:like-o"></SvgIcon>
                {{item.like}}
              </li>
            </ul>
            <span></span>
          </div>
        </div>
      </li>
    </ul>

  </section>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import SvgIcon from '@/components/SvgIcon/index.vue'

const activeKey = ref('1');

const data = ref([
  {
    image: 'https://cdn.shibe.online/shibes/43c12261bab77d48e2ba2516b6c54fa77324ecc6.jpg',
    title: 'Vue中组件之间的传值(通信)',
    paragraph: '父子之间的传值父向子传值1、利用props传（1）子组件中定//第一种定义方法，直接定义数组方式,下面定义了两个传递属性。但是并不能设置属性的类型或默认值等其他',
    createDate: '2023-05-05',
    articleView: 12,
    leaveWord: 23,
    like: 30
  },
  {
    image: 'https://cdn.shibe.online/shibes/2a74eca16ccd92dd1c0565be808ac29ee1be43be.jpg',
    title: 'Vue中组件之间的传值(通信)',
    paragraph: '父子之间的传值父向子传值1、利用props传（1）子组件中定//第一种定义方法，直接定义数组方式,下面定义了两个传递属性。但是并不能设置属性的类型或默认值等其他',
    createDate: '2023-05-05',
    articleView: 12,
    leaveWord: 23,
    like: 30
  },
  {
    image: 'https://cdn.shibe.online/shibes/94ca64fc93e67b0a7ca49a042a1031fa43080ff4.jpg',
    title: 'Vue中组件之间的传值(通信)',
    paragraph: '父子之间的传值父向子传值1、利用props传（1）子组件中定//第一种定义方法，直接定义数组方式,下面定义了两个传递属性。但是并不能设置属性的类型或默认值等其他',
    createDate: '2023-05-05',
    articleView: 12,
    leaveWord: 23,
    like: 30
  },
  {
    image: 'https://cdn.shibe.online/shibes/7d03e82f4773e0da6c37a87f888b47d20765ad2b.jpg',
    title: 'Vue中组件之间的传值(通信)',
    paragraph: '父子之间的传值父向子传值1、利用props传（1）子组件中定//第一种定义方法，直接定义数组方式,下面定义了两个传递属性。但是并不能设置属性的类型或默认值等其他',
    createDate: '2023-05-05',
    articleView: 12,
    leaveWord: 23,
    like: 30
  },
  {
    image: 'https://cdn.shibe.online/shibes/716320a0b3bfbec450ba422ebdd161799ff46b2b.jpg',
    title: 'Vue中组件之间的传值(通信)',
    paragraph: '父子之间的传值父向子传值1、利用props传（1）子组件中定//第一种定义方法，直接定义数组方式,下面定义了两个传递属性。但是并不能设置属性的类型或默认值等其他',
    createDate: '2023-05-05',
    articleView: 12,
    leaveWord: 23,
    like: 30
  },

])
</script>

<style lang="scss" scoped>
.list {
  background-color: var(--background);
  padding: 0 15px 5px 15px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.list-item {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid var(--classC);
  &:last-child {
    border-bottom: none;
  }
  .list-left {
    position: relative;
    margin-right: 15px;

    .img-icon {
      color: #fff;
      font-size: 18px;
      position: absolute;
      top: 5px;
      left: 5px;
    }

    .list-img {
      width: 210px;
      height: 140px;
      border-radius: 5px;
    }
  }

  .list-right {
    flex: 1;
    display: flex;
    flex-direction: column;

    .title {
      display: block;
      font-size: 18px;
      margin-bottom: 10px;
      line-height: 24px;
      color: var(--main);
    }

    .describe {
      height: 100%;
      font-size: 14px;
      color: var(--minor);
      line-height: 22px;
      max-height: 44px;
      opacity: .85;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
    }

    .list-bottom {
      margin-top: 33px;

      .bottom-text {
        display: flex;
        font-size: 13px;
        color: var(--minor);

        li {
          &::after {
            content: "/";
            color: var(--seat);
            padding: 0 5px;
          }

          &:last-child::after {
            content: '';
          }
        }
      }
    }
  }
}


</style>