<template>
  <div class="post">
    <div class="post-header">
      <!-- :style="{ 속성명 : string 형태의 속성 값 }" -->
      <div class="profile" :style="{ backgroundImage: `url(${data.userImage})` }"></div>
      <span class="profile-name">{{ data.name }}</span>
    </div>
    <div class="post-body" :style="{ backgroundImage: `url(${data.postImage})` }"></div>
    <div class="post-content">
      <p>{{ data.likes }} Likes</p>
      <p>
        <strong>{{ 글쓴이아이디 }}</strong
        >{{ data.content }}
      </p>
      <p class="date">{{ data.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    data: Object,
  },
};
</script>

<style>
@import "Post.css";
</style>
