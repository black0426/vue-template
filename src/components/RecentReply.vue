<template>
  <div class="panel">
    <header>最近参与的话题</header>
    <Divider class="divider" />
    <template v-for="item in user.recent_replies">
      <div :key="item.id">
        <a v-if="simple">
          {{ item.title }}
        </a>
        <div v-else class="flex">
          <div class="main">
            <div>
              <a class="avatar">
                <img :src="item.author && item.author.avatar_url" alt="头像" />
              </a>
              <a>
                {{ item.title }}
              </a>
            </div>
          </div>
          <span class="time">
            {{
              $moment(item.last_reply_at, 'YYYY-MM-DD')
                .startOf('day')
                .fromNow()
            }}
          </span>
        </div>
        <!-- <Divider class="inside-divider" /> -->
      </div>
    </template>
  </div>
</template>
<script>
import eventProxy from '@/utils/eventProxy'
import Divider from '@/components/Divider'
export default {
  name: 'RecentReply',
  components: {
    Divider
  },
  props: {
    simple: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      user: {}
    }
  },
  created () {
    // 增加属性，表示当前实例未被卸载
    this.isUnmounted = false //暂不知啥意思
    //订阅 - 发布模式 还没看
    eventProxy.on('user', data => {
      // 如果当前实例被卸载了，就没有必要更新其state了（会引起内存泄漏）
      if (!this.isUnmounted) {
        this.user = data
      }
    })
  },
  destroyed () {
    this.isUnmounted = true
  },
  computed: {},
  methods: {}
}
</script>
<style lang="less" scoped>
.panel {
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  header {
    color: black;
    font-weight: bold;
  }
  > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > div {
          display: flex;
          align-items: center;
        }
      }
    }
    .time {
      float: right;
      color: #777;
      font-size: 11px;
    }
    .inside-divider {
      margin: 10px 0;
    }
    .avatar {
      margin-left: 10px;
    }
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    margin-right: 5px;
  }
}
.divider {
  margin: 12px 0;
}
</style>
