<template>
  <div>
    <ul v-for="set in sets" :key="set.index">
      <li v-for="n in even(set)" :key="n.index">{{ n }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10]
      ]
    }
  },
  created () {},
  computed: {},
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
}
</script>
<style lang="less" scoped></style>
