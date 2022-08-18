import { createApp } from "vue";
import ECharts from "vue-echarts";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.component("v-chart", ECharts);

app.use(createPinia());
app.use(router);

app.mount("#app");
