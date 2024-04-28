<template>
  <div>
    <Post :key="i" v-for="(item, i) in post" :data="item" />
  </div>
  <button @click="more">더보기</button>
</template>

<script>
import Post from "./post/Post.vue";

import { data } from "../constants/data";
import { getData } from "@/hooks/getData";

export default {
  name: "Container",
  components: {
    Post,
  },
  data() {
    return {
      post: data,
      count: 0,
    };
  },
  methods: {
    async more() {
      const data = await getData(this.count);

      if (data) {
        this.post.push(data);
        this.count++;
      } else {
        alert("데이터가 없습니다.");
      }
    },
  },
};
</script>

<style></style>
