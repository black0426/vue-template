// 元素说明指令 v-tooltip
// 为元素添加说明，如同 element-ui 的 el-tooltip（问号 icon 在鼠标覆盖后，展示说明文字
export default function (el, binding) {
  if (el.hasIcon) return
  const iconElement = structureIcon(binding.arg, binding.value)
  el.appendChild(iconElement)
  el.hasIcon = true
}

function structureIcon (content, attrs) {
  // 拼接绑定属性
  let attrStr = ''
  for (let key in attrs) {
    attrStr += `${key}=${attrs[key]} `
  }
  const a = `<el-tooltip content=${content} ${attrStr}><i class="el-icon-question" style="margin:0 10px"></i></el-tooltip>`
  // 创建构造器
  const tooltip = Vue.extend({
    template: a
  })
  // 创建一个 tooltip 实例并返回 dom 节点
  const component = new tooltip().$mount()
  return component.$el
}

// 参数	                说明	                                                                               默认值	  类型	  可选
// content	       传给指令的参数。例如 v-tooltip:content 中，参数为 "content" ，tooltip中展示的内容为："content"	/	    String	 可选
// tootipParams	   element-ui 支持的 tooltip 属性	                                                             /	     Object	  可选

//<div v-tooltip:content='tootipParams'> 提示 </div>

//example:<div v-tooltip:提示内容为XXX1> 提示1</div> <div v-tooltip:提示内容为XXX='tootipParams'> 提示2 </div>

//为指令传入element-ui支持的参数
/* 
    data() {
        return {
            tootipParams: {
                placement: 'top',
                effect: 'light',
            }
        }
    } 
*/
