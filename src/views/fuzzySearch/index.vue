<template>
  <div>模糊搜索需求,查看console.log()</div>
  <!-- 模糊搜索一般后端做，前端可以做不复杂的模糊需求 -->
  <!-- 下载了fuse.js来写的 -->
  <!-- 需求demo 可以从上个项目的来想 -->
</template>
<script>
import Fuse from 'fuse.js'
export default {
  data () {
    return {}
  },
  created () {},
  mounted () {
    const list = [
      {
        title: '垂暮之战',
        author: '约翰·史卡奇',
        tags: ['小说']
      },
      {
        title: '天才锁匠',
        author: '史蒂夫',
        tags: ['惊险小说']
      }
    ]

    const options = {
      /* 
  类型：boolean
  默认：false   
  */
      // API 分数是否应包含在结果集中。分数0表示完全匹配，而分数1表示完全不匹配
      includeScore: true,
      keys: ['author', 'tags', 'title']
    }

    const fuse = new Fuse(list, options)

    const result = fuse.search('锁')

    console.log(result, 'result')
  },
  computed: {},
  methods: {}
}
</script>
<style lang="less" scoped></style>
