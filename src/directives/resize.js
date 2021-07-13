// 响应缩放指令 v-resize
// 使用该指令可以响应元素宽高改变时执行的方法
export default {
  bind (el, binding) {
    let width = '',
      height = ''
    function isReize () {
      const style = document.defaultView.getComputedStyle(el)
      if (width !== style.width || height !== style.height) {
        binding.value() // 执行传入的方法
      }
      width = style.width
      height = style.height
    }
    el.__timer__ = setInterval(isReize, 300) // 周期性监听元素是否改变
  },
  unbind (el) {
    clearInterval(el.__timer__)
  }
}

// 参数	                        说明	          默认值	类型	可选
// resize()	      传入元素改变 size 后执行的方法	/	   Function	 必选

/* 

 传入 resize() 方法
<div v-resize="resize"></div>

 */
