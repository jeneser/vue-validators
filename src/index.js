// import { methods } from './utils.js'

let installed = false

const VueValidators = {}

// Plugin API
// *********
VueValidators.install = function (Vue, opts = {}) {
  Vue.prototype.$v = {
    isEmail: function () {
      console.log('is email')
    }
  }
  installed = true
}.bind(VueValidators)

// Utilities
// ********
if (typeof exports == "object") {
  module.exports = VueValidators
} else if (typeof define == "function" && define.amd) {
  define([], function(){ return VueValidators })
} else if (typeof window !== 'undefined' && window.Vue) {
  window.VueValidators = VueValidators
  Vue.use(VueValidators)
}
