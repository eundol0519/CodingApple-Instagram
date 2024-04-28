<template>
  <div class="header">
    <ul class="header-button-left" @click="step--">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right" @click="step++">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <div class="tab">
    <button :key="i" v-for="(item, i) in tab" @click="step = item.page">{{ item.name }}</button>
  </div>

  <Container :step="step" :uploadSrc="uploadSrc" />

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" @change="upload" accept="image/*" />
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
      uploadSrc: null,
    };
  },
  methods: {
    upload(e) {
      this.step = 1;

      // FileLeader() or URL.createObjectUrl()
      const file = e.target.files; // 업로드한 파일 정보들이 담겨져 있음
      const url = URL.createObjectURL(file[0]);
      this.uploadSrc = url;
    },
  },
};
</script>

<style>
@import "App.css";
</style>
