import axios from "axios";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

createApp(App).use(router).mount("#app");
