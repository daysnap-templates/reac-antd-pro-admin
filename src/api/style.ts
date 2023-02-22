import curl from './curl'

// 获取样式
export const reqStyleBundleByAppId = (data: { appId: string }) =>
  curl('/api/poppy/v1/styles/bundles/{appId}', data)
