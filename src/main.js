// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from '@/view/index/Index'
import router from './router'
import elementUi from 'element-ui'
import normalize from './assets/normalize.css'

Vue.config.productionTip = false
Vue.use(elementUi);
Vue.use(normalize);

/* eslint-disable no-new */
const vue = new Vue({
	el: '#index',
  router,
  components: { Index }
})
