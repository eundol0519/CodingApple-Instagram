<template>
  {{ data }}
  <div class="post">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{ data.name }}</span>
    </div>
    <div class="post-body"></div>
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
