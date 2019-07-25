<template>
  <div>
    <cmt-box :id="$route.params.id"></cmt-box>
  </div>
</template>

<script>
import comment from "../subcomponnets/comment.vue";

export default {
  data() {
    return {};
  },
  components: {
    "cmt-box": comment
  },
  methods: {
  }
};
</script>

<style>
</style>
