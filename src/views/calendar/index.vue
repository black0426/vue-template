<template>
  <div class="calendar">
    <div class="calendarTitle">
      <span>日历</span>
    </div>
    <el-button @click="goSearch" type="primary">进入搜索页面</el-button>
    <div class="calendarContent">
      <dl class="calendarData" v-for="item in CalendarData" :key="item.id">
        <dt>{{ item.startTime }}</dt>
        <dd>{{ item.title }}</dd>
      </dl>
    </div>
  </div>
</template>
<script>
import { getCalendarData } from '@/utils/mock.js'
export default {
  name: 'calendar',
  data () {
    return {
      CalendarData: []
    }
  },
  created () {
    this.CalendarData = getCalendarData[0].data
    this.test()
  },
  computed: {},
  methods: {
    //   arrSort (arr, str) {
    //     var _arr = []
    //     var _t = []
    //     var _tmp
    //     //按照特定的参数将数组排序将具有相同的值放在一起
    //     arr = arr.sort((a, b) => {
    //       var s = a[str]
    //       var t = b[str]
    //       return s < t ? -1 : 1
    //     })

    //     if (arr.length) {
    //       _tmp = arr[0][str]
    //     }
    //     //将相同类别的对象添加到同一个数组
    //     for (var i in arr) {
    //       if (arr[i][str] === _tmp) {
    //         _t.push(arr[i])
    //       } else {
    //         _tmp = arr[i][str]
    //         _arr.push(_t)
    //         _t = [arr[i]]
    //       }
    //     }
    //     // 将最后的内容推出新数组
    //     _arr.push(_t)
    //     return _arr
    //   }
    // }
    // 根据后端返回数据进行处理
    sortArr (arr, str) {
      var _t = []
      var _arr = []
      var _tmp

      // 按照特定的参数将数组将具有相同的值排列在一起
      arr = arr.sort((a, b) => {
        var s = a[str]
        var t = b[str]
        return s < t ? -1 : 1
      })

      if (arr.length) {
        _tmp = arr[0][str]
      }

      //相同类别的对象添加到同一个数组

      for (var i in arr) {
        if (arr[i][str] === _tmp) {
          _t.push(arr[i])
        } else {
          _tmp = arr[i][str]
          _arr.push(_t)
          _t = [arr[i]]
        }
      }
      _arr.push(_t)
      return _arr
    },
    test () {
      let a = [
        {
          name: 4,
          key: 'c'
        },
        {
          name: 1,
          key: 'b'
        },
        {
          name: 3,
          key: 'a'
        },
        {
          name: 2,
          key: 'b'
        },
        {
          name: 6,
          key: 'a'
        },
        {
          name: 5,
          key: 'c'
        },
        {
          name: 7,
          key: 'a'
        }
      ]
      const res = this.sortArr(a, 'key')
      console.log(res, 'res')
      // 对数组进行一个相同值key的排序
      let b = a.sort((a, b) => {
        //根据数组的 key 排序
        return a.key < b.key ? -1 : 1
      })
      let c = {}
      b.forEach(item => {
        let array = c[item['key']] || []
        array.push(item)
        c[item['key']] = array
      })
      console.log(c, 'c')
      // 将对象转成数组
      let arr = []
      for (let item in c) {
        console.log(item, 'item')
        c[item] = c[item].sort((a, b) => {
          return a.name < b.name ? -1 : 1
        })
        arr.push(c[item])
      }
      console.log(arr, 'arr')
    },
    goSearch () {
      this.$router.push({ name: 'search' })
    }
  }
}
</script>
<style lang="less" scoped>
.calendar {
  max-width: 1200px;
  margin: 0 auto;
  .calendarTitle {
    margin: 0 auto;
  }
  .calendarContent {
    height: 1000px;
    .calendarData {
      display: flex;
    }
  }
}
</style>
