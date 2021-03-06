import request from '@/utils/request'

//获取首页帖子列表数据
export const getTopics = data => {
  return request({
    url: '/topics',
    methods: 'get',
    params: data
  })
}

//获取帖子详情数据
export const getTopicById = id => {
  return request({
    url: `/topic/${id}`,
    methods: 'get'
  })
}

//获取用户详情数据
export const getUserByName = loginname => {
  return request({
    url: `/user/${loginname}`,
    methods: 'get'
  })
}
