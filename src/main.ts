import { createApp } from "vue";
import { createPinia } from "pinia";
import { Tabs, Card } from "ant-design-vue";

import App from "./App.vue";

import "./assets/base.css";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);

app.use(createPinia());
app.use(Tabs);
app.use(Card);

app.mount("#app");
