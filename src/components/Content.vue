<template>
  <div>
    <div class="topic" v-for="item in list" :key="item.id">
      <div @click="goAvatar(item.author)">
        <img
          :src="item.author.avatar_url | imgCheck"
          @error="imgErr(item.author.avatar_url)"
          alt="用户头像"
        />
      </div>
      <span class="count">
        <em>{{ item.reply_count }}</em
        >/<em>{{ item.visit_count }}</em>
      </span>
      <el-tag :type="$tab[item.tab] && $tab[item.tab].type">
        {{ item.tab ? $tab[item.tab] && $tab[item.tab].name : '无分类' }}
      </el-tag>
      <div class="title" @click="goTopic(item.id)">
        {{ item.title }}
      </div>
      <span class="time">
        {{
          $moment(item.last_reply_at, 'YYYY-MM-DD')
            .startOf('day')
            .fromNow()
        }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Topics',
  props: ['list'],
  data () {
    return {
      article: []
    }
  },
  created () {},
  computed: {},
  methods: {
    // 图片加载失败方法
    imgErr (url) {
      console.log(url)
    },
    goAvatar (params) {
      console.log(params, 'params')
      console.log(this.loginname)
      this.$router.push({
        path: '/user/' + params.loginname
        // query: { id: params.loginname }
      })
    },
    goTopic (params) {
      console.log(params)
      this.$router.push({
        path: '/topic/' + params
        // query: { id: params }
      })
    }
  },
  filters: {
    imgCheck (url) {
      /* 源地址： https://avatars[1|2].githubusercontent.com/u/1159760?v=4&s=120
       * 把avatars后面的数字去掉即可访问到图片
       */
      return url.replace(/avatars[0-9]/, 'avatars')
    }
  }
}
</script>
<style lang="less" scoped>
.topic {
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 50px;
    border-radius: 50%;
    height: 50px;
  }
  span.count {
    width: 50px;
    text-align: center;
    em:first-child {
      font-size: 1.2em;
      color: purple;
    }
    em:last-child {
      color: grey;
    }
  }
  .title {
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
  }
  span.time {
    width: 70px;
    text-align: right;
  }
}
</style>
