<template>
  <div class="panel">
    <header>最近创建的话题</header>
    <Divider class="divider" />
    <template v-for="item in user.recent_topics">
      <div :key="item.id">
        <a v-if="simple">{{ item.title }}</a>
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
        <Divider class="inside-divider" />
      </div>
    </template>
  </div>
</template>
<script>
import eventProxy from '@/utils/eventProxy'
import Divider from '@/components/Divider'
export default {
  name: 'OtherTopic',
  props: {
    simple: {
      default: true,
      type: Boolean
    }
  },
  components: {
    Divider
  },
  data () {
    return {
      user: {}
    }
  },
  created () {
    this.isUnmounted = false // this.isUnmounted 暂不知道这啥意思
    eventProxy.on('user', data => {
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
