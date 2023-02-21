import { Suspense } from 'react'
import { Nprogress } from '@/components'

export function Loadable(Component: any) {
  // eslint-disable-next-line react/display-name
  return (props: Record<string, any> = {}) => {
    return (
      <Suspense fallback={<Nprogress />}>
        <Component {...props} />
      </Suspense>
    )
  }
}
