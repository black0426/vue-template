<template>
  <el-button @click="lottery">鬼灭之刃人物抽奖</el-button>
</template>
<script>
export default {
  data () {
    return {}
  },
  created () {},
  computed: {},
  methods: {
    lottery () {
      const list = [
        '我妻善逸',
        '嘴平伊之柱',
        '灶门碳治郎',
        '灶门弥豆子',
        '富冈义勇',
        '甘露寺蜜璃',
        '不死川实弥',
        '炼狱杏寿郎',
        '时透无一郎',
        '伊黒小芭内',
        '宇髓天元',
        '蝴蝶忍',
        '产屋敷彼方',
        '鬼舞辻󠄀无惨'
      ]
      for (let i = 0; i < 1; i++) {
        const random = Math.floor(Math.random() * list.length)
        console.log('---')
        console.log(list[random])
        console.log('+++')
        list[random] = list[list.length - 1]
        list.length--
      }
    }
  }
}
</script>
<style lang="less" scoped></style>
