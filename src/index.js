import { config } from './utils'

let installed = false

const VueValidators = { config }

// Plugin API
// *********
VueValidators.install = function install(Vue, opts = {}) {
  const name = opts.name || 'vue-validators'
  Vue.component(name, assign(Component, { name }))
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
