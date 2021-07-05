<template>
  <div class="divider"></div>
</template>
<script>
export default {
  /* 分割线组件

    就一条线
    */
  name: 'Divider',
  data () {
    return {}
  },
  created () {},
  computed: {},
  methods: {}
}
</script>
<style lang="less" scoped>
.divider {
  display: block;
  height: 1px;
  width: 100%;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  list-style: none;
  background: #e8e8e8;
}
</style>
