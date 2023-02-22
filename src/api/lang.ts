import curl from './curl'

// 获取语言
export const reqLangBundleByAppId = (data: { appId: string }) =>
  curl('/api/poppy/v1/langs/bundles/{appId}', data)
