import { createApp } from "vue";
import type { App, Directive } from 'vue'
import Root from "./App.vue";
import "uno.css";
import router from "@/router"
import './styles/index.scss'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import "animate.css"
import {setDragImgDirective} from "@/directives";
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

function start() {
  const app = createApp(Root);
  app.use(Antd)
  app.use(router)
  setupDirective(app)
  app.use(VueViewer)
  app.mount("#app");
}
function setupDirective(app: App) {
  // 注册loading自定义指令
  setDragImgDirective(app)
}

start()
