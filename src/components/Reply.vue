<template>
  <div class="reply">
    <div>
      <span style="margin-right:4px">{{ data.length }}</span
      >回复
    </div>
    <div v-for="(reply, index) in data" :key="reply.id">
      <a @click="skip(reply.author)">
        <img :src="reply.author && reply.author.avatar_url" alt="头像" />
      </a>
      <div>
        <div class="info">
          <div>
            <span>{{ index + 1 }}楼&nbsp;</span>
            <a @click="skip(reply.author)">
              {{ reply.author.loginname }}
            </a>
            <span>
              {{
                $moment(reply.create_at, 'YYYY-MM-DD')
                  .startOf('day')
                  .fromNow()
              }}
            </span>
          </div>
          <span class="thumbs">
            <img
              v-if="reply.ups.length"
              :src="require('@/assets/image/thumbs-up.svg')"
              alt="点赞"
            />
            {{ reply.ups.length !== 0 ? reply.ups.length : '' }}
          </span>
        </div>
        <p v-html="reply.content" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'reply',
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  created () {},
  computed: {},
  methods: {
    skip (params) {
      this.$router.push({ path: '/user/' + params.loginname })
    }
  }
}
</script>
<style lang="less" scoped>
.reply {
  width: 100%;
  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    margin-right: 15px;
  }
  > div {
    display: flex;
    border: 1px solid #ebedf0;
    border-bottom-width: 0;
    color: rgba(0, 0, 0, 0.65);
    padding: 10px 20px;
    > div {
      //   display: flex;
      //   flex-direction: column;
      //   align-items: center;
      width: 100%;
      p {
        margin: 0;
        width: 100%;
        /deep/ img {
          width: 100%;
        }
      }
      .info {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .thumbs {
          font-size: 15px;
          display: flex;
          align-items: center;
          img {
            width: 12px;
            height: 15px;
            margin-right: 5px;
            transform: rotate(-15deg);
          }
        }
      }
    }
  }
  > div:first-child {
    color: rgba(0, 0, 0, 0.85);
    font-weight: bold;
  }
  > div:last-child {
    border-bottom: 1px solid #ebedf0;
  }
}
</style>
