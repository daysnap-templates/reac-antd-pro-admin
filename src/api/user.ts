import curl from './curl'

// 重置密码
export const doUserResetPassword = (data: { password: string }) =>
  curl('/api/poppy/v1/users/credentials/reset-password', data, {
    method: 'post',
  })
