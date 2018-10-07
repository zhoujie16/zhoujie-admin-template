import request from '@/utils/request'

export function addUser(params) {
  return request({
    url: '/api/admin/add_user',
    method: 'get',
    params
  })
}

