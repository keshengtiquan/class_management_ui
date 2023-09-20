<template>
  <section class="author">
    <img src="/aa.webp" width="100%" height="120" class="image" alt="aa"/>
    <div class="user">
      <div class="avatar_wrapper">
        <img class="avatar" alt="头像" src="http://keshengtiquan.work:8090/upload/2022/05/u=2773297884,1372771882&fm=253&fmt=auto&app=120&f=PNG-54f55f14601f445da2816499555ba1fe.webp"/>
        <img class="avatar_frame bat" alt="头像"  src="http://keshengtiquan.work:8090/themes/joe2.0-VtNEF/source/frame/bat.png" />
        <img class="avatar_widget meteor" alt="头像"  src="http://keshengtiquan.work:8090/themes/joe2.0-VtNEF/source/widget/meteor.gif"/>
      </div>
      <span class="link">李剑波</span>
      <span class="describe">鸿羽难凭芳信短，长安犹近归期远。</span>
    </div>
    <div class="count">

    </div>

  </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.author {
  background: var(--background);
  padding: 45px 15px 15px;
  &::before{
    content: "";
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
    height: 30px;
    z-index: 2;
    background: -webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,0)),to(var(--background)));
    background: linear-gradient(to bottom,rgba(255,255,255,0),var(--background))
  }
  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120px;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 1;
    border-radius: var(--radius-wrap) var(--radius-wrap) 0 0;
  }
  .user {
    position: relative;
    z-index: 4;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-bottom: 15px;
    .avatar_wrapper {
      position: relative;
      width: 75px;
      height: 75px;
      margin-bottom: 12px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .avatar {
      display: block;
      width: 75px;
      height: 75px;
      overflow: hidden;
      padding: 5px;
      -o-object-fit: cover;
      object-fit: cover;
      background: var(--classC);
      border-radius: 50%;
    }
    .avatar_frame {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
      width: 75px;
      height: 75px;
      max-width: unset;
      pointer-events: none;
      transform: scale(1.23);
      -webkit-filter: drop-shadow(1px 1px 2px var(--classL));
      filter: drop-shadow(1px 1px 2px var(--classL));
      .bat {
        left: -11px;
        top: -12px;
        width: 98px;
        height: 98px;
      }
    }
    .avatar_widget {
      position: absolute;
      left: 0;
      top: -10px;
      z-index: 3;
      width: 75px;
      max-width: unset;
      pointer-events: none;
    }
    .link {
      color: var(--theme);
      margin-bottom: 10px;
      text-align: center;
      font-size: 16px;
      font-weight: 500;
      text-shadow: 1px 1px 8px var(--theme);
    }
    .describe {
      font-size: 12px;
      color: #757575;
    }
  }
  .count {
    width: 100%;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
  }
}
</style>