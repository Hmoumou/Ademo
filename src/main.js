// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import {$axios} from './utils'
import store from './store'
import uploadImg from '@/components/upload-com'
import 'element-ui/lib/theme-chalk/index.css';



Vue.prototype.$axios = $axios;
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.component('upload-img',uploadImg)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
