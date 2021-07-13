/*
 空状态指令 v-empty 
使用该指令可以显示缺省的空状态。可以传入默认图片（可选，默认无图片）、默认文字内容（可选，默认为暂无数据）、以及标示是否显示空状态（必选）。
*/
export default {
  update (el, binding, vnode) {
    el.style.position = el.style.position || 'relative'
    const { offsetHeight, offsetWidth } = el
    const { visible, content, img } = binding.value
    const image = img ? `<img src="${img}" height="30%" width="30%"></img>` : ''
    const defaultStyle =
      'position:absolute;top:0;left:0;z-index:9999;background:#fff;display:flex;justify-content: center;align-items: center;'
    const empty = Vue.extend({
      template: `<div style="height:${offsetHeight}px;width:${offsetWidth}px;${defaultStyle}">
        <div style="text-align:center">
          <div>${image}</div>
          <div>${content || '暂无数据'}</div>
        </div>
      </div>`
    })
    const component = new empty().$mount().$el
    if (visible) {
      el.appendChild(component)
    } else {
      el.removeChild(el.lastChild)
    }
  }
}

// 参数	            说明	                                                   默认值	类型	可选
// emptyValue	包含文字内容 content、图片 img、是否显示 visible，仅 visible 必传	/	 Object	  必须

// <div style="height:500px;width:500px" v-empty="emptyValue"> 原本内容

/*  emptyValue = {
  content: '暂无列表',
  img: require('../../assets/images/blue_big.png'),
  visible: true,
}, */
