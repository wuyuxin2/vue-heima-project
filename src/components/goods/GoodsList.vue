<template>
  <div class="goods-list">
    <!-- <router-link 
    class="goods-item" 
    v-for="item in goodslist" :key="item.id"
    :to="'/home/goodsinfo/' + item.id"
    tag="div">
      <img :src="item.img_url"/>
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">¥{{ item.sell_price }}</span>
          <span class="old">¥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </router-link>-->

    <!-- 在网页中有两种跳转方式：
      1. 使用 a 标签 的形式叫做 标签跳转
    2. 使用 window.loaction.href 的形式，叫做 编程式导航-->
    <div @click="goDetail(item.id)" class="goods-item" v-for="item in goodslist" :key="item.id">
      <img :src="item.img_url" />
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">¥{{ item.sell_price }}</span>
          <span class="old">¥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>

    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageindex: 1,
      goodslist: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      this.$http
        .get("api/getgoods?pageindex=" + this.pageindex)
        .then(result => {
          if (result.body.status === 0) {
            this.goodslist = this.goodslist.concat(result.body.message);
          }
        });
    },
    getMore() {
      this.pageindex++;
      this.getGoodsList();
    },
    goDetail(id) {
      // 使用 JS 的形式进行路由导航

      // 注意： 区分 this.$route 和 this.$router 这两个对象
      // 其中： this.$route 是路由【参数对象】，所有路由中的参数，params，query都属于它
      // 其中： this.$router 是一个路由【导航对象】，用它可以方便的 使用JS代码，实现路由的前进、后退、跳转到新的URL地址
      console.log(this);
      // this.$router.push( "/home/goodsinfo/" + id )
      // this.$router.push({ path: "/home/goodsinfo/" + id })
      this.$router.push({ name: "goodsinfo", parms: { id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around; 居中
  padding: 7px;
  justify-content: space-between; // 两边贴紧
  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .info {
      background-color: #ddd;

      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
      }
    }
  }
}
</style>
