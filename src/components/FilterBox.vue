<template>
  <!-- or :class="filter + ' filter-item'" -->
  <div class="filter-item" :class="filter" :style="{ backgroundImage: `url(${image})` }" :key="i" v-for="(filter, i) in filters">
    {{ filter }}
    <slot></slot>
  </div>
</template>

<script>
import { filters } from "@/constants/filters";

export default {
  name: "FilterBox",
  props: {
    image: String,
  },
  data() {
    return {
      filters: filters,
      selectFilter: "",
    };
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
