// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

var VueValidators

if (process.env.NODE_ENV === 'development') {
  VueValidators = require('../src')
} else {
  VueValidators = require('../dist/vue-touch.js')
}

Vue.use(VueValidators)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
