<template>
  <!-- 问题：:data-numbox-max="max",由于.then异步操作，不知道什么时候拿到 max ，但总归有一刻会拿到-->
  <!-- 我们可以 使用 watch 属性监听，来监听 父组件传递过来的max值 -->
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      value="1"
      @change="countChanged"
      ref="numbox"
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
  <!-- 子组件什么时候把数据传递给父组件 -->
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  props: ["max"],
  watch: {
    // 属性监听
    max: function(newVal, oldVal) {
      // 使用 JS API 设置 numbox 的最大值
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal);
    }
  },
  mounted() {
    // 初始化数字选择框
    mui(".mui-numbox").numbox();
    console.log(this.max);
  },
  methods: {
    countChanged() {
      //  每当 文本框的数据被修改的时候，立即把 最新的数据，通过事件调用，传递给父组件
      // console.log(this.$refs.numbox.value);
      this.$emit("getcount", parseInt(this.$refs.numbox.value));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

