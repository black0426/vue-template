<template>
  <div class="search">
    <!-- 
      <input v-model="searchText">
      等价于：
      <input
        v-bind:value="searchText"
        v-on:input="searchText = $event.target.value"
      >
     -->
    <input type="text" v-focus />
    <el-input
      v-focus
      v-model.trim="searchModel"
      placeholder="搜索详情呀"
      @input="clickInput"
    ></el-input>
    <!-- input,el-input同时存在的指令v-focus时,input 的自定义指令不会生效 -->
    <div v-demo:foo.a.b="message"></div>
    <HelloWorld :msg="msg" @test="clickTest"> </HelloWorld>
    <div>{{ testData }}1123</div>
    <!-- 动态指令参数 -->
    <div id="baseexample">
      <p>Scroll down the page(向下滚动页面)</p>
      <p v-pin:[direction]="350">
        Stick me 350px from the top of the page(从页面顶部伸出350px)
      </p>
    </div>
  </div>
</template>
<script>
import HelloWorld from '../../components/HelloWorld'
export default {
  components: {
    HelloWorld
  },
  name: 'search',
  data () {
    return {
      searchModel: '',
      msg: 'HelloWorld',
      testData: '',
      message: 'hello!',
      direction: 'top'
    }
  },
  created () {
    console.log('父组件')
  },
  computed: {},
  methods: {
    clickTest (data) {
      this.testData = data
      console.log(this.testData, 'this.testData')
    },
    clickInput () {
      console.log('触发clickInput') //在 Input 值改变时触发
    }
  },
  //局部指令
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
          el = el.getElementsByTagName('input')[0]
        }
        el.focus()
      }
    }
  }
}
</script>
<style lang="less" scoped>
.search {
  width: 500px;
}
</style>
