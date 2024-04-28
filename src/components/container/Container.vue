<template>
  <!-- 게시물 목록 페이지 -->
  <div v-if="step === 0">
    <Post :key="i" v-for="(item, i) in post" :data="item" />
    <button @click="more">더보기</button>
  </div>

  <!-- 필터 선택 페이지 -->
  <div v-if="step === 1">
    <div class="upload-image"></div>
    <div class="filters">
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
    </div>
  </div>

  <!-- 글 작성 페이지 -->
  <div v-if="step === 2">
    <div class="upload-image"></div>
    <div class="write">
      <textarea class="write-box">write!</textarea>
    </div>
  </div>
</template>

<script>
import { data } from "@/constants/data";
import Post from "../post/Post.vue";
import { getData } from "@/hooks/getData";

export default {
  name: "Container",
  props: {
    step: Number,
  },
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

<style>
@import "Container.css";
</style>
