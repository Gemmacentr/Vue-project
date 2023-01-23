import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faHeadphones,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faHeadphones, faRandom);

createApp(App).use(router).mount("#app");
