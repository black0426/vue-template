// 文字超出省略指令 v-ellipsis
/*
使用该指令当文字内容超出宽度（默认 100 px）时自动变为省略形式。等同于使用 css
width: 100px;
whiteSpace: nowrap
overflow: hidden;
textOverflow: ellipsis; 
*/

export default function (el, binding) {
  el.style.width = binding.arg || 100 + 'px'
  el.style.whiteSpace = 'nowrap'
  el.style.overflow = 'hidden'
  el.style.textOverflow = 'ellipsis'
}

// 参数	      说明  	默认值	 类型	 可选
// width	元素宽度	100 	Number	必填

// <div v-ellipsis:100> 需要省略的文字是阿萨的副本阿萨的副本阿萨的副本阿萨的副本</div>
