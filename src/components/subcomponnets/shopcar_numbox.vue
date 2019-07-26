<template>
  <div class="mui-numbox" data-numbox-min="1" style="height:25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="input"
      :value="initcount"
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
  props:["initcount"],
  mounted() {
    // 初始化数字选择框
    mui(".mui-numbox").numbox();
    console.log(this.max);
  },
  methods: { 
    countChanged() {
        // 数量改变
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

