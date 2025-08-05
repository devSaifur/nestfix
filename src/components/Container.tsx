import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
  className?: string
}

const Container = ({ children, className }: React.PropsWithChildren<Props>) => {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-5', className)}>
      {children}
    </div>
  )
}

export default Container
