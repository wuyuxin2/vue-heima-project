<template>
  <mt-swipe :auto="4000">
      <!-- 将来谁使用这个组件吗，谁为我们出阿迪 lunbotuList -->
      <!-- 此时，lunbotuList 应该是 父组件向子组件传值来设置 -->
    <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
      <img :src="item.img" :class="{ 'full': isfull }"/>
    </mt-swipe-item>
  </mt-swipe>
</template>

// 为什么商品轮播图中的 轮播图那么丑？
// 目标：高度100%，宽度自适应

<script>
export default {
    props:["lunbotuList", "isfull"],
    data() {
        return {
            
        }
    },
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
      text-align: center;
    img {
    //   width: 100%;
      height: 100%;
    }
  }
}

.full{
    width:100%;
}
</style>

