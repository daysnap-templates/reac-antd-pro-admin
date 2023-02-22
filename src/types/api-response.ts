// response
export interface ApiResponse<T = any> {
  success: boolean
  messageKey: string
  messagePrams: Record<string, any>
  data: T
}
