import axios from "axios";

export const getData = (count) =>
    axios.get(`https://codingapple1.github.io/vue/more${count}.json`)
        .then((res) => res.data)
        .catch((error) => console.error("error", error));
