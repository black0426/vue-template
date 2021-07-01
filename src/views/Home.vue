<template>
  <div class="home">
    <el-tabs v-model="tab" @tab-click="tabChanged">
      <el-tab-pane label="全部" name="all"></el-tab-pane>
      <el-tab-pane label="精华" name="good"></el-tab-pane>
      <el-tab-pane label="分享" name="share"></el-tab-pane>
      <el-tab-pane label="问答" name="ask"></el-tab-pane>
      <el-tab-pane label="招聘" name="job"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      tab: 'all'
    }
  },
  created () {},
  computed: {},
  methods: {
    tabChanged () {}
  }
}
</script>
<style lang="less" scoped></style>
