<template>
  <div class="home">
    <el-tabs v-model="tab" @tab-click="tabChanged">
      <el-tab-pane label="全部" name="all">
        <Content :list="list" />
      </el-tab-pane>
      <el-tab-pane label="精华" name="good">
        <Content :list="list" />
      </el-tab-pane>
      <el-tab-pane label="分享" name="share">
        <Content :list="list" />
      </el-tab-pane>
      <el-tab-pane label="问答" name="ask">
        <Content :list="list" />
      </el-tab-pane>
      <el-tab-pane label="招聘" name="job">
        <Content :list="list" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Content from '@/components/Content.vue'
import { getTopics } from '@/utils/api'
import { setSession, getSession } from '@/utils/util'
export default {
  name: 'Home',
  components: {
    Content
  },
  data () {
    return {
      page: 1,
      limit: 20,
      tab: 'all',
      list: [],
      store: {} // 存储所有Tab对应的数据，因为切换Tab后就没必要重新以limit:20加载数据。
    }
  },

  created () {
    this.tab = getSession('activeTab') ? getSession('activeTab') : 'all'
    this.getTopics()
    window.addEventListener('scroll', this.scrollMethod)
  },
  destroyed () {
    window.addEventListener('scroll', this.scrollMethod)
  },
  computed: {},

  methods: {
    /*
    当前Tab变化是判断Store里是否已经存储数据
    是：设置到state中
    否：重新获取数据
    */
    tabChanged () {
      const store = this.store

      setSession('activeTab', this.tab)
      // 如果未存储当前Tab的数据，重新获取
      if (!store[this.tab]) {
        this.limit = 20
        this.list = []
        this.getTopics()
        return
      }

      this.list = store[this.tab].data
      this.limit = store[this.tab].limit
    },

    /*
    滚动函数，判断当前滚动条是否到了底部来决定是否重新拉去数据
    */

    scrollMethod () {
      const sumH =
        document.body.scrollHeight || document.documentElement.scrollHeight
      const viewH = document.documentElement.clientHeight
      const scrollH =
        document.body.scrollTop || document.documentElement.scrollTop
      if (viewH + scrollH >= sumH) {
        this.getTopics()
      }
    },

    getTopics () {
      getTopics({
        page: this.page,
        limit: this.limit,
        tab: this.tab
      }).then(res => {
        this.list = res.data
        // console.log(res.data, '112312')
        this.limit = this.limit + 10

        const store = this.store
        store[this.tab] = {
          limit: this.limit,
          data: res.data
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  margin: auto;
  width: 75%;
  padding: 20px 30px;
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
