<template>
  <div class="post">
    <div class="post-header">
      <!-- :style="{ 속성명 : string 형태의 속성 값 }" -->
      <div class="profile" :style="{ backgroundImage: `url(${post.userImage})` }"></div>
      <span class="profile-name">{{ post.name }}</span>
    </div>
    <div class="post-body" :class="post.filter" :style="{ backgroundImage: `url(${post.postImage})` }"></div>
    <div class="post-content">
      <p>{{ post.likes }} Likes</p>
      <p>
        <strong>{{ 글쓴이아이디 }}</strong
        >{{ post.content }}
      </p>
      <p class="date">{{ post.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
  },
};
</script>

<style>
@import "Post.css";
</style>
