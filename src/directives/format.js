// 字符串整形指令 v-format
/* 
使用该指令可以修改字符串，如使用 v-format.toFixed 保留两位小数、 v-format.price 将内容变成金额（每三位逗号分隔），可以同时使用，
如 v-format.toFixed.price。
例如将数字 243112.331 变成 243112.33，或 243,112.33。
 */

export default {
  update (el, binding, vnode) {
    const { value, modifiers } = binding
    if (!value) return
    let formatValue = value
    if (modifiers.toFixed) {
      formatValue = value.toFixed(2)
    }
    console.log(formatValue)
    if (modifiers.price) {
      formatValue = formatNumber(formatValue)
    }
    el.innerText = formatValue
  }
}

function formatNumber (num) {
  num += ''
  let strs = num.split('.')
  let x1 = strs[0]
  let x2 = strs.length > 1 ? '.' + strs[1] : ''
  var rgx = /(\d+)(\d{3})/
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2')
  }
  return x1 + x2
}

// 参数	              说明	              默认值	类型	可选
// toFixed	      保留两位小数   	         /	   String	可选
// price	      整形成金额（三位逗号分隔）  /	     String	 可选

// <div v-format.toFixed.price="123333"> 123 </div>
