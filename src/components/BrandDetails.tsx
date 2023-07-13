import { BrandDetailsProps } from '@/types'
import Image from 'next/image'
import React from 'react'

export default function BrandDetails({logo, brand} : BrandDetailsProps) {
  return (
    <div>
        <div className="flex items-center mb-2">
          <Image src={logo} alt="logo" width={25} height={25} className="mr-1" />
          <span className="text-sm">{brand}</span>
        </div>
    </div>
  )
}
