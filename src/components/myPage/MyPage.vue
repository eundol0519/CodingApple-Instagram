<template>
  <h1>MyPage</h1>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="🔍" />
    <div class="post-header" :key="i" v-for="(follower, i) in followers">
      <div class="profile" :style="{ backgroundImage: `url(${follower.image})` }"></div>
      <span class="profile-name">{{ follower.name }}</span>
    </div>
  </div>
</template>

<script>
import { followerData } from "@/constants/follower";
import { onMounted, reactive, ref, toRefs } from "vue";
import { useStore } from "vuex";

export default {
  name: "myPage",
  props: {
    one: Number,
  },
  // 거의 모든 기능 개발을 setup 한 곳에서 할 수 있다.
  setup(props) {
    // 모든 데이터를 reference data type으로 감싸야 실시간 반영 가능
    // 데이터는 ref()에 담고, return {}을 해줘야 위에서 사용할 수 있다.

    // 데이터 만들 때 ref or reactive를 사용할 수 있고, reactive는 보통 array나 object를 넣는다.
    let followers = ref([]);
    let test = reactive({ name: "kim" });

    console.log(test.name);

    // props 받아올 때 ref, 여러개 받아올 때는 toRefs 사용
    let { one } = toRefs(props);

    console.log(one.value);

    // watch 사용법
    // watch(감시할 data 이름, () => { 실행할 코드 })

    // computed 사용법
    // computed(() => { return 연산 결과 })

    // vuex store 사용법
    // + vue@4에서는 store의 값을 mapState로 computed 할 수 없다.
    let store = useStore();
    console.log(store.state.count);

    onMounted(() => {
      // 컴포넌트 장착 후 실행될 코드
    });

    followers.value = followerData;

    return { followers };
  },
};
</script>

<!-- vue 파일에 있던 css는 build 시 하나로 합쳐지는 데 그게 싫으면 scoped를 사용하면 된다. -->
<style scoped></style>
