import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '../src/folderscss/index.scss';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "aos";
import "@fortawesome/fontawesome-free/css/all.css";
createApp(App).use(store).use(router).mount("#app");