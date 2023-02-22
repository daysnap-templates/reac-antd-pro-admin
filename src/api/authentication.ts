import curl from './curl'

// auth with username and password for session
export const doAuthSessionSubmit = (data: {
  appId: string
  userName: string
  password: string
}) => curl('/api/poppy/v1/authentication/session', data, { method: 'post' })
