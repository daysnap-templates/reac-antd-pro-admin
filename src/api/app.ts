import curl from './curl'

// 根据 domain 获取 app 信息
export const reqAppInfoByDomain = (data: { domain: string }) =>
  curl('/api/poppy/v1/apps/domains/{domain}', data)

//
