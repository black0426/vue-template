/*
 * @Author: link
 * @Date: 2021-06-28 17:07:31
 * @Last Modified by:  link
 * @Last Modified time: 2021-06-28 17:07:31
 */
import Vue from 'vue'
// 防抖函数
Vue.prototype.$debounce = function () {
  let timer = null
  return function (fn, delay = 300) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, delay)
  }
}
// Vue.prototype.$debounce = function () {
//   let timer = null
//   return function (fn, delay = 300) {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(fn, delay)
//   }
// }
