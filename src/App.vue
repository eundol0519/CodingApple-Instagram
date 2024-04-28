<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <div class="tab">
    <button :key="i" v-for="(item, i) in tab" @click="step = item.page">{{ item.name }}</button>
  </div>

  <Container :step="step" />

  <div class="footer" v-if="step === 1">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "./components/container/Container.vue";

export default {
  name: "App",
  components: {
    Container,
  },
  data() {
    return {
      tab: [
        {
          name: "게시물 목록",
          page: 0,
        },
        {
          name: "필터 선택",
          page: 1,
        },
        { name: "글 작성", page: 2 },
      ],
      step: 0,
    };
  },
};
</script>

<style>
@import "App.css";
</style>
