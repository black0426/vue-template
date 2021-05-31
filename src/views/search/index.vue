<template>
  <div class="search">
    <!-- <el-input v-model="searchModel" placeholder="搜索详情呀"></el-input> -->
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
      console.log(data)
      this.testData = data
      console.log(this.testData, 'this.testData')
    }
  }
}
</script>
<style lang="less" scoped>
.search {
  width: 500px;
}
</style>
