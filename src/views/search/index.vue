<template>
  <div class="search">
    <el-input
      v-model.trim="searchModel"
      placeholder="搜索详情呀"
      @input="clickInput"
    ></el-input>
    <HelloWorld :msg="msg" @test="clickTest"> </HelloWorld>
    <div>{{ testData }}1123</div>
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
      testData: ''
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
  }
}
</script>
<style lang="less" scoped>
.search {
  width: 500px;
}
</style>
