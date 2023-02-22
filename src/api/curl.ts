import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import { ApiResponse } from '@/types'

export const baseURL = 'http://poppy-api.lingyuan-tech.com'

const log = (config: InternalAxiosRequestConfig, ...args: any[]) => {
  const { url = '', baseURL = '' } = config
  console.log(`${url?.startsWith(`http`) ? url : baseURL + url}`, ...args)
}

const instance = axios.create({
  baseURL,
  timeout: 60 * 1000,
  responseType: 'json',
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const { data, params } = config
    log(config, `请求参数 =>`, data || params)
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    const { data: respData, config } = response
    log(config, '请求结果 => ', respData)

    const { success, data } = respData as ApiResponse

    if (!success) {
      return Promise.reject(respData)
    }

    return data
  },
  (error) => {
    const response: AxiosResponse = error.response
    if (response) {
      const { status, data: respData } = response
      if (status === 401) {
        // todo 需要处理
      }
      return Promise.reject(respData)
    }
    return Promise.reject(error)
  },
)

export default function curl<T = any>(
  url: string,
  data: Record<string, any> = {},
  options: AxiosRequestConfig = {},
): Promise<T> {
  const { method = 'get' } = options

  if (url.includes('{')) {
    data = { ...data }
    Object.keys(data).forEach((key) => {
      if (url.includes(`{${key}}`)) {
        url = url.replace(`{${key}}`, data[key])
        delete data[key]
      }
    })
  }
  options.url = url

  options[method === 'get' ? 'params' : 'data'] = data

  return instance(options)
}
