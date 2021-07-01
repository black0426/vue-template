import Vue from 'vue'

import App from './App.vue'

import axios from 'axios'

import './plugins/element.js'
// import { Input, Button } from 'element-ui'

// Vue.use(Input)
// Vue.use(Button)

Vue.config.productionTip = false

import router from './router'

Vue.prototype.$axios = axios

// //注册一个全局指令'v-focus'
// Vue.directive('focus', {
//   //当被绑定的元素插入到DOM中时...
//   inserted: function (el) {
//     /*
//      toLocaleUpperCase() 方法根据本地主机语言环境把字符串转换为大写格式，并返回转换后的字符串。

//      toLocaleLowerCase()方法根据任何指定区域语言环境设置的大小写映射，返回调用字符串被转换为小写的格式。

//      toUpperCase() 方法将调用该方法的字符串转为大写形式并返回（如果调用该方法的值不是字符串类型会被强制转换）。

//      toLowerCase() 会将调用该方法的字符串值转为小写形式，并返回。
//      */
//     if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
//       console.log(el.tagName.toLocaleUpperCase())
//       console.log(el, 'el123')
//       el = el.getElementsByTagName('input')[0]
//       console.log(el, 'el123456')
//     }
//     //聚焦元素
//     el.focus()
//   }
// })
// 全局指令 官方文档案例
Vue.directive('demo', {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    console.log(s(binding.name), '123')
    el.innerHTML =
      'name:' +
      s(binding.name) +
      '<br>' +
      'value:' +
      s(binding.value) +
      '<br>' +
      'expression:' +
      s(binding.expression) +
      '<br>' +
      'argument:' +
      s(binding.arg) +
      '<br>' +
      'modifiers:' +
      s(binding.modifiers) +
      '<br>' +
      'vnode keys:' +
      Object.keys(vnode).join(',')
  }
})

Vue.directive('pin', {
  bind: function (el, binding) {
    el.style.position = 'fixed'
    var s = binding.arg === 'left' ? 'left' : 'top'
    el.style[s] = binding.value + 'px'
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
