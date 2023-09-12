<template>
  <main>
    <section class="section">
      <div class="card" v-for="item in data" :key="item.date">
        <div class="content">
          <p class="heading">{{item.date}}</p>
          <p class="para">
            作业内容：{{item.title}}
          </p>
          <p class="para">
            反馈：{{item.title2}}
          </p>
          <button class="btn">查看更多</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import {ref} from "vue";

const data = ref([
  {date: '2023-09-01', title: '发噶公司分dsgfa为服务范围dfasff', title2: '递归大发噶积极健康斤斤计较斤斤计较哥哥东升个热歌'},
  {date: '2023-09-02', title: '发噶公司分东升个法国人为服务范围', title2: '递归大发噶事实上生生世世生生世世生生世世哥哥东升个热歌'},
  {date: '2023-09-03', title: '发噶公司分sdgasfwe为服务范围', title2: '递归大发噶哥发飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞飞哥东升个热歌'},
  {date: '2023-09-04', title: '发噶公司分为服 冯绍峰哇发哇务范围', title2: '递归大发噶凄凄切切凄凄切切凄凄切切凄凄切切凄凄切切凄凄切切凄凄切切钱钱钱哥哥东升个热歌'},
  {date: '2023-09-05', title: '发噶公司分为服的发卡我让我去务范围', title2: '递归大发噶哥我旺旺旺旺旺旺旺旺旺旺旺旺旺旺旺旺旺旺哥东升个热歌'},
  {date: '2023-09-06', title: '发噶公司分dfawrfqrfweefwaerwqwrfq 为服务范围', title2: '递归大发温热为发热为发热我让我而玩儿玩儿完噶哥哥东升个热歌'},
  {date: '2023-09-07', title: '发噶公司分为发个热和额外方式改为我而去服务范围', title2: '递归大发噶哥哥东特人特人特人特人特升个热歌'},
  {date: '2023-09-08', title: '发噶公司分为服fwetergbuihfuioahwuiefnjk务范围', title2: '递归大发噶而且委屈委屈恶趣味去哥哥东升个热歌'},
  {date: '2023-09-09', title: '发噶公司分发噶更符合副IEu呵呵容我为服务范围', title2: '递归大发噶哥为企鹅企鹅请问请问认为哥东升个热歌'},
  {date: '2023-09-10', title: '发噶公司分部时间内将东升经济收益吴江数以万计结束时间就去分为服务范围', title2: '递归大发噶哥为企鹅请问哥东升个热歌'},
])
</script>

<style scoped>
.section {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
}
.card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  margin: 8px 5px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  color: var(--text-color);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.content .heading {
  font-weight: 700;
  font-size: 32px;
}

.content .para {
  line-height: 1.5;
}

.content .btn {
  color: #e8e8e8;
  text-decoration: none;
  padding: 10px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.card::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
  z-index: -1;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.card:hover::before {
  height: 100%;
}

.card:hover {
  box-shadow: none;
}

.card:hover .btn {
  color: #212121;
  background: #e8e8e8;
}

.content .btn:hover {
  outline: 2px solid #e8e8e8;
  background: transparent;
  color: #e8e8e8;
}

.content .btn:active {
  box-shadow: none;
}

</style>