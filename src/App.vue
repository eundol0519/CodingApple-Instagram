<template>
  <h4>현재 count는 {{ $store.state.count }}입니다.</h4>
  <button @click="increment(10)">+</button>
  <button @click="decrement(10)">-</button>

  <h4>Computed를 사용한 store의 state mapState로 받아오기</h4>
  <p>{{ count }}</p>
  <p>{{ likes }}</p>
  <p>{{ likeYN }}</p>

  <hr />

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

  <Container :step="step" :uploadSrc="uploadSrc" @moreData="moreData" @changeContent="changeContent" :filter="filter" />

  <div class="footer" v-if="step === 0">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" @change="upload" accept="image/*" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Container from "./components/container/Container.vue";
import { posts } from "@/constants/posts";

export default {
  name: "App",
  components: {
    Container,
  },
  data() {
    return {
      posts: posts,
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
      filter: "",
    };
  },
  // 컴포넌트가 생성될 때마다 내부에 있는 메소드가 실행된다.
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
        filter: this.filter,
      };

      this.posts.unshift(addPost);
      this.step = 0;
    },
    moreData(data) {
      this.posts.push(data);
    },
    changeContent(value) {
      this.content = value;
    },
    ...mapMutations(["increment", "decrement"]),
  },
  // 첫 컴포넌트 생성 시 실행되고, 이후에는 따로 설정하지 않는 이상 실행되지 않고 처음 실행했을 때 간직한 값을 사용한다.
  // 계산저장용 함수
  computed: {
    ...mapState(["count", "likes", "likeYN"]),
    // ...mapState({ 작명: 'count', ... }),
  },
  mounted() {
    this.emitter.on("filter", (data) => {
      this.filter = data;
    });
  },
};
</script>

<style>
@import "App.css";
</style>
