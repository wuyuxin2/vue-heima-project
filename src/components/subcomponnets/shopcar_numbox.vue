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
      readonly
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
  <!-- 子组件什么时候把数据传递给父组件 -->
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  props:["initcount", "goodsid"],
  mounted() {
    // 初始化数字选择框
    mui(".mui-numbox").numbox();
    console.log(this.max);
  },
  methods: { 
    countChanged() {
        // 数量改变
        // console.log(this.$refs.numbox.value);
        // 每当数据值改变，则立即把最新的数量同步到 购物车的 store 中，覆盖之前的数量值
        this.$store.commit("updateGoodsInfo",{
          id: this.goodsid,
          count: this.$refs.numbox.value
        })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

