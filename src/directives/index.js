// 在 Vue，除了核心功能默认内置的指令 ( v-model 和 v-show )，Vue 也允许注册自定义指令。它的作用价值在于当开发人员在某些场景下需要对普通 DOM 元素进行操作。

/*  
    Vue 自定义指令有全局注册和局部注册两种方式。
        先来看看注册全局指令的方式，通过 Vue.directive(id, [definition]) 方式注册全局指令。然后在入口文件中进行 Vue.use() 调用。
*/

//批量注册指令，新建directives/index.js

import copy from './copy'
import longpress from './longpress'
//自定义指令

const directive = {
  copy,
  longpress
}

export default {
  install (Vue) {
    Object.keys(directive).forEach(key => {
      Vue.directives(key, directive[key])
    })
  }
}

/* 
  在main.js引入并调用 
  import Vue form 'vue'
  import Directive from './JS/directives'
  Vue.use(Directives)

  指令定义函数提供了几个钩子函数（可选）
  bind:只调用一次，指令第一次绑定到元素时调用，可以定义一个在绑定时执行一次的初始化动作。

  inserted：被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于document中）

  update：被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值

  componentUpdated：被绑定元素所在模板完成一次更新周期时调用

  unbind：只调用一次，指令与元素解绑时调用

  下面分享几个实用的 Vue 自定义指令

  · 复制粘贴指令 v-copy
  · 长按指令 v-longpress
  · 输入框防抖指令 v-debounce
  · 禁止表情及特殊字符 v-emoji
  · 图片懒加载 v-LazyLoad
  · 权限校验指令 v-premission
  · 实现页面水印 v-waterMarker
  · 拖拽指令 v-draggable

  转载：https://mp.weixin.qq.com/s?__biz=MzAxODE4MTEzMA==&mid=2650084668&idx=1&sn=993a0bbc319fe0da8cbde87942a1c450&scene=19#wechat_redirect
   github(全球最大的同性交友网站): https://github.com/Michael-lzg
*/
