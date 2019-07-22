<template>
  <div id="app" class="app-container">
    <!-- 顶部 Header 区域 -->
    <mt-header fixed title="Vue 项目"></mt-header>

    <!-- 中间的 路由 router-view 区域 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部 Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  overflow-x: hidden; // 横向的超过部分 隐藏
}
.v-enter{
  opacity: 0;
  transform: translateX(100%); // 从右边进
  position: absolute; // 消除 向上位移 的动画
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%); // 从左边消失
  position: absolute; // 消除 向上位移 的动画
}
.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease
}
</style>
