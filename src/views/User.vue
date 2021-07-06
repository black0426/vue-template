<template>
  <div class="user">
    <ProfilePanel :loginname="loginname" />
    <OtherTopic :simple="false" />
    <RecentReply :simple="false" />
  </div>
</template>
<script>
import OtherTopic from '@/components/OtherTopic'
import ProfilePanel from '@/components/ProfilePanel'
import RecentReply from '@/components/RecentReply'
export default {
  name: 'User',
  data () {
    return {
      loginname: ''
    }
  },
  created () {
    this.loginname = this.$route.params.id
  },
  /**
   * 在当前路由改变，但是该组件被复用时调用
   * 举例来说，对于一个带有动态参数的路径 /user/:id，在 /user/shuiRong 和 /user/martin 之间跳转的时候，
   * 由于会渲染同样的 User 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
   * 可以访问组件实例 `this`
   */
  beforeRouteUpdate (to, from, next) {
    this.loginname = to.params.id
    next()
  },
  computed: {},
  methods: {},
  components: {
    RecentReply,
    OtherTopic,
    ProfilePanel
  }
}
</script>
<style lang="less" scoped>
.user {
  width: 75%;
  margin: auto;
}
</style>
