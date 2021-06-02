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
