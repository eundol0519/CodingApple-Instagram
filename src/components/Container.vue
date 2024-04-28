<template>
  <div>
    <Post :key="i" v-for="(item, i) in data" :data="item" />
  </div>
</template>

<script>
import Post from "./post/Post.vue";

import { data } from "../constants/data";

export default {
  name: "Container",
  components: {
    Post,
  },
  data() {
    return {
      data: data,
    };
  },
};
</script>

<style></style>
