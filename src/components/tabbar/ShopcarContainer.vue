<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!-- 商品列表区域 -->
      <div class="mui-card" v-for="item in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img :src="item.thumb_path">
            <div class="info">
              <h1>{{ item.title }}</h1>
              <p>
                <span class="price">¥{{ item.sell_price }}</span>
                <numbox :initcount="$store.getters.getGoodsCount[item.id]"></numbox>
                <!-- 问题：如何从购物车中获取商品的数量？ -->
                <!-- 1. 我们可以先创建一个 空对象，然后循环购物车中的所有商品的数据，把 当前循环这条商品的 Id，作为 对象 的 属性名，count值作为 对象的 属性值，这样，当把所有的商品循环一遍，就会得到一个对象 -->


                <a href="">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 结算区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div
            class="mui-card-content-inner"
          >这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from '../subcomponnets/shopcar_numbox.vue'

export default {
  data() {
    return {
      goodslist:[]
    }
  },
  created(){
    this.getGoodsList()
  },
  methods:{
    getGoodsList(){
      // 1. 获取到 store 中所有商品的Id，然后拼接出一个 用逗号分隔的 字符串
      var idArr = []
      this.$store.state.car.forEach(item => idArr.push(item.id));
      // 如果购物车中没有商品，则直接返回，不需要请求数据接口
      if(idArr.length <= 0){
        return;
      }
      // 获取购物车商品列表
      this.$http.get('api/goods/getshopcarlist/' + idArr.join(","))
      .then(result => {
        if(result.body.status === 0){
          this.goodslist = result.body.message;
        }
      })
    }
  },
  components:{
    numbox
  }
};
</script>

<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list{
    img{
      width: 60px;
      height: 60px;
    }
    h1{
      font-size: 13px;
    }
    .info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price{
        color: red;
        font-weight: bold;
      }  
    }
    .mui-card-content-inner{
      display: flex;
      align-items: center;
    }
  }
}
</style>

