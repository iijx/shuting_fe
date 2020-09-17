import Vue from 'vue'
import App from './App.vue'
import router from './router';
import http from './lib/http';
import * as util from './lib/utils'
import * as config from './config';
import "animate.css";

import { SubmitBar, Cell, CellGroup,  RadioGroup, Radio, Panel, Button, Toast} from 'vant';
Vue.use(SubmitBar).use( RadioGroup).use(Radio).use(Cell).use(CellGroup).use(Panel).use(Button).use(Toast);

Vue.config.productionTip = false
Vue.prototype.$Http = http
Vue.prototype.$Util = util
Vue.prototype.$Config = config

// if (location.href.indexOf("openid") < 0) {
//   // window.location.href = "https://payjs.cn/api/openid?mchid=1578310381&callback_url=".concat(encodeURIComponent("http://stcdn.iijx.site/"));
// } else {
// }
    new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
