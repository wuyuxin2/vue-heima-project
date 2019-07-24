<template>
  <div class="photoInfo-container">
    <h3 class="title">{{ photoInfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoInfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoInfo.click }} 次</span>
    </p>

    <hr />

    <!-- 图片缩略图 -->
    <div class="thumbs">
        <vue-preview :slides="list" @close="handleClose"></vue-preview>
    </div>
    

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoInfo.content"></div>

    <hr />

    <!-- 评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
import comment from "../subcomponnets/comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      photoInfo: {},
      list: []
    };
  },
  components: {
    "cmt-box": comment
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
            console.log('获取图片成功！！！');
          this.photoInfo = result.body.message[0];
        }
      });
    },
    getThumbs() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
            console.log('ok');
          result.body.message.forEach(item => {
            item.w = 300;
            item.h = 200;
            item.msrc = item.src;
          });
          this.list = result.body.message;
        }else{
            console.log('获取缩略图失败');
        }
      });
    },
    handleClose() {
      console.log("close event");
    }
  }
};
</script>

<style lang="scss" scoped>
.photoInfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
  .thumbs{
      margin: 10px;

  }
}
</style>

