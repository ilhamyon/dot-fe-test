import { ContainerProps } from '@/types'
import React from 'react'

export default function Container({children} : ContainerProps) {
  return (
    <div className="lg:container px-5 lg:px-10 mx-auto">
        {children}
    </div>
  )
}
