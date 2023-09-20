<template>
  <section>
    <div class="top">
      <div class="tags" v-for="item in classify">{{item.title}}</div>
    </div>
    <div class="main">
      <div class="poetrys">
        <Poetry v-for="item in poetrys" :key="item" :poetry="item"></Poetry>
      </div>
      <div >
        <Author class="aside_item"></Author>
      </div>
    </div>

  </section>
</template>

<script setup>
import {onMounted, ref} from "vue";
import Author from './component/Author.vue'
import Poetry from "@/views/poetry/component/Poetry.vue";

const classify = ref([
  {title: '唐诗'},
  {title: '宋词'},
  {title: '曹操诗集'},
  {title: '楚辞'},
  {title: '四书五经'},
  {title: '蒙学'},
  {title: '诗经'},
  {title: '元曲'},
])
const poetrys = ref([
  {
    "author": "刘禹锡",
    "title": "蜀先主庙",
    "content": [
      "天地英雄气，千秋尚凛然。",
      "势分三足鼎，业复五铢钱。",
      "得相能开国，生儿不象贤。",
      "凄凉蜀故伎，来舞魏宫前。"
    ],
    "prologue": "此诗歌颂了开国之君刘备的历史功绩。天地英雄的气派，千秋还存在的凛然正气。在三足鼎立的形势下，从事兴复汉室。得到诸葛丞相，便开创了蜀国；生个儿子刘禅，却不像先贤。令人感到凄凉的是，蜀国原来的歌伎，竟来到洛阳的魏宫起舞。"
  },
  {
    "author": "王建",
    "title": "新嫁娘",
    "content": [
      "三日入厨下，洗手作羹汤。",
      "未谙姑食性，先遣小姑尝。"
    ],
    "prologue": "此诗朴素生动地刻划了封建社会媳妇对婆婆，特别是新嫁娘初到婆婆家，那种畏惧谨慎的心理状态。　　按照习俗，新嫁娘婚后的第三天要下厨做菜。　　第三天下厨房，洗手后煮羹汤，不熟悉婆婆的口味，先请小姑尝试。"
  },
  {
    "author": "张籍",
    "title": "野老歌",
    "content": [
      "老农家贫在山住，耕种山田三四亩。",
      "苗疏税多不得食，输入官仓化为土。",
      "岁暮锄犁傍空室，呼儿登山收橡实。",
      "西江贾客珠百斛，船中养犬长食肉。"
    ],
    "prologue": "老翁家贫住在山中，靠耕种三四亩山田为生。田亩少，赋税多，没有吃的。粮食送进官府的仓库，最后腐烂变质，化为泥土。一年到头，家中只剩下锄头、犁耙靠在空房子里面，只好叫儿子上山去拾橡子充饥。西来的长江的富商的船中，成百上千的珠宝用斛来计量，连船上养的狗也长年吃肉。"
  },
  {
    "author": "张籍",
    "title": "没蕃故人",
    "content": [
      "前年戍月支，城下没全师。",
      "蕃汉断消息，死生长别离。",
      "无人收废帐，归马识残旗。",
      "欲祭疑君在，天涯哭此时。"
    ],
    "prologue": "诗写悼念战死于吐蕃的故人。　　前年我军讨伐月支(借指吐蕃)，城下一战，全军覆没。战后，吐蕃和汉族从此断绝消息，死的死，活的活，长时间地分离。打战后废弃的营帐无人收，只有马还能认识残旗，知道回来的路。想要祭奠，怀疑君还活着，此时只有向着天涯放声痛哭。"
  },
  {
    "author": "孟郊",
    "title": "游子吟",
    "content": [
      "慈母手中线，游子身上衣。",
      "临行密密缝，意恐迟迟归。",
      "谁言寸草心，报得三春晖。",
    ],
    "prologue": "母亲为即将远去的儿子缝补衣裳，临行时密密地缝补，担心他要很长的时间不能回来。子女像小草般的爱心，难以报答像春天阳光一样的母爱。 "
  },
  {
    "author": "李益",
    "title": "暖川",
    "content": [
      "胡风冻合䴙鹈泉，牛马千群逐暖川。",
      "塞外征行无尽日，年年移帐雪中天。"
    ],
    "prologue": "诗写戍边战士在冰天雪地中度过漫长的艰苦岁月。塞外的寒风吹得䴙鹈泉结了厚冰，千万群牛马向温暖的平川迁移。军队在塞外征战没有尽期，年年转战在冰天雪地。"
  },
  {
    "author": "李益",
    "title": "从军北征",
    "content": [
      "天山雪后海风寒，横笛偏吹《行路难》。",
      "碛里征人三十万，一时回首月中看。"
    ],
    "prologue": "天山下了一场大雪，薄海刮来寒冷的风。行军途中，战士都吹起《行路难》的笛曲。沙漠里征军三十万，一到夜晚，所有的战士都望着故乡的明月。"
  },
  {
    "author": "李益",
    "title": "夜上受降城闻笛",
    "content": [
      "回乐烽前沙似雪，受降城外月如霜。",
      "不知何处吹芦管，一夜征人尽望乡。"
    ],
    "prologue": "月光像霜一样洁白而寒冷，映照在回乐城东面耸立着的烽火台。沙漠像雪一样白，边塞一片荒凉景象。不知什么地方吹响了芦管的音乐，整个夜晚，所有的将士都在思念自已的故乡。"
  },
])

</script>

<style lang="scss" scoped>
.main {
  display: flex;
  margin-top: 15px;
}
.aside_item {
  position: relative;
  width: 280px;
  margin-bottom: 15px;
  border-radius: var(--radius-wrap);
  -webkit-box-shadow: var(--box-shadow);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  background-color: var(--background);
}
.top {
  background-color: var(--background);
  padding: 20px;
  border-radius: var(--radius-wrap);
  display: flex;

  .tags {
    font-size: 14px;
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 4px;
    background-color: #e8effe;
    color: var(--link-color);
    cursor: url("/link.cur"), auto !important;
    &:hover {
      color: #fff;
      background-color: var(--theme);
    }
  }
}
.poetrys {
  flex: 1;
  margin-right: 20px;
}

</style>