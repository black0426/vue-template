// import screenfull from 'screenfull'

// 元素全屏指令 v-screenfull
// 全屏指令，点击元素进行全屏/退出全屏的操作。支持元素后面是否插入 element-ui 的全屏图标 el-icon-full-screen。
export default {
  bind (el, binding) {
    if (binding.modifiers.icon) {
      if (el.hasIcon) return
      // 创建全屏图标
      const iconElement = document.createElement('i')
      iconElement.setAttribute('class', 'el-icon-full-screen')
      iconElement.setAttribute('style', 'margin-left:5px')
      el.appendChild(iconElement)
      el.hasIcon = true
    }
    el.style.cursor = el.style.cursor || 'pointer'
    // 监听点击全屏事件
    el.addEventListener('click', () => handleClick())
  }
}

function handleClick () {
  if (!screenfull.isEnabled) {
    alert('浏览器不支持全屏')
    return
  }
  screenfull.toggle()
}
// 参数： icon 说明： 是否添加icon  默认值 ： /  类型：  String  可选：可选
// <div v-screenfull.icon>全屏</div>
