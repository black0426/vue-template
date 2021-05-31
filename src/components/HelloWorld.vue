<template>
  <div class="hello">
    <!-- <slot name="customize"></slot> -->
    <el-input v-model="msg"></el-input>
    <button @click="test">点击传唉</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: 'L O V E'
    }
  },
  props: {
    msg: String
  },
  methods: {
    test () {
      this.$emit('test', this.list)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
