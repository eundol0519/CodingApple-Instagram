<template>
  <div class="header">
    <ul class="header-button-left" @click="step--">
      <li v-if="step !== 0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step === 1" @click="step++">Next</li>
      <li v-if="step === 2" @click="publish">Publish</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <div class="tab">
    <button :key="i" v-for="(item, i) in tab" @click="step = item.page">{{ item.name }}</button>
  </div>

  <Container :step="step" :uploadSrc="uploadSrc" :post="post" @moreData="moreData" @changeContent="changeContent" />

  <div class="footer" v-if="step === 0">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" @change="upload" accept="image/*" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "./components/container/Container.vue";
import { data } from "@/constants/data";

export default {
  name: "App",
  components: {
    Container,
  },
  data() {
    return {
      post: data,
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
      content: "",
    };
  },
  methods: {
    upload(e) {
      // FileLeader() or URL.createObjectUrl()
      const file = e.target.files; // 업로드한 파일 정보들이 담겨져 있음
      const url = URL.createObjectURL(file[0]);
      this.uploadSrc = url;

      this.step++;
    },
    publish() {
      const addPost = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.uploadSrc,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.content,
        filter: "perpetua",
      };

      this.post.unshift(addPost);
      this.step = 0;
    },
    moreData(data) {
      this.post.push(data);
    },
    changeContent(value) {
      this.content = value;
    },
  },
};
</script>

<style>
@import "App.css";
</style>
