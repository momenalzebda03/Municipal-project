import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../dist/css/index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "aos";

createApp(App).use(store).use(router).mount("#app");
