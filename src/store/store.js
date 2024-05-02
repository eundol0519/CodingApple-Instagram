import { posts } from "@/constants/posts";
import { getData } from "@/hooks/getData";
import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            count: 0,
            likes: 30,
            likeYN: false,
            data: [...posts],
            moreCount: 0
        }
    },
    mutations: {
        increment(state, payload) {
            state.count += payload
        },
        decrement(state, payload) {
            state.count -= payload
        },
        likeHandler(state) {
            if (state.likeYN) {
                state.likes--
                state.likeYN = false;
            } else {
                state.likes++
                state.likeYN = true;
            }
        },
        setMore(state, payload) {
            state.data.push(payload)
            state.moreCount++;
        }
    },
    actions: {
        async getData(context) {
            const data = await getData(context.state.moreCount);

            if (data) {
                context.commit('setMore', data)
            } else {
                alert("데이터가 없습니다.");
            }
        }
    },
    computed: {
    }
})

export default store