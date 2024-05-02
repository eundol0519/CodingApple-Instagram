<template>
  <!-- 게시물 목록 페이지 -->
  <div v-if="step === 0">
    <Post :key="i" v-for="(post, i) in posts" :post="post" :index="i" />
    <button @click="$store.dispatch('getData')">더보기</button>
  </div>

  <!-- 필터 선택 페이지 -->
  <div v-if="step === 1">
    <div class="upload-image" :class="filter" :style="{ backgroundImage: `url(${uploadSrc})` }"></div>
    <div class="filters">
      <FilterBox :image="uploadSrc">
        <!-- Slot 연습 -->
      </FilterBox>
    </div>
  </div>

  <!-- 글 작성 페이지 -->
  <div v-if="step === 2">
    <div class="upload-image" :class="filter" :style="{ backgroundImage: `url(${uploadSrc})` }"></div>
    <div class="write">
      <textarea class="write-box" @change="changeHandler">write!</textarea>
    </div>
  </div>
</template>

<script>
import FilterBox from "../FilterBox.vue";
import Post from "../post/Post.vue";

export default {
  name: "Container",
  props: {
    step: Number,
    uploadSrc: String,
    filter: String,
  },
  components: {
    Post,
    FilterBox,
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.posts = this.$store.state.data;
  },
};
</script>

<style>
@import "Container.css";
</style>
