import { createApp } from "vue";
import { createPinia } from "pinia";
import {
  Tabs,
  Card,
  Input,
  InputNumber,
  Form,
  Select,
  List,
  Tag,
  Button,
} from "ant-design-vue";

import App from "./App.vue";

import "./assets/base.css";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);

app.use(createPinia());
app.use(Tabs);
app.use(Card);
app.use(Form);
app.use(Input);
app.use(InputNumber);
app.use(Select);
app.use(List);
app.use(Tag);
app.use(Button);

app.mount("#app");
