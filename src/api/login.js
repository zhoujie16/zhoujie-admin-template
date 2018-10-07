import request from '@/utils/request'

export function login(username, password) {
  return request({
    // url: '/user/login',
		url:'/api/admin/user_login',
    method: 'get',
    params: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    // url: '/user/info',
		url:'/api/admin/user_info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/api/admin/user_logout',
    method: 'post'
  })
}
