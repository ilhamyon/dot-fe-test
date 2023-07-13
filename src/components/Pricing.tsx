import React from 'react'
import { PricingProps } from '@/types'

export default function Pricing({designPrice, constructionPrice}: PricingProps) {
    return (
        <div className="py-3">
            <div className="text-sm">Harga Desain</div>
            <div className="text-2xl font-semibold my-1">{designPrice}</div>
            <div className="text-sm text-gray-400">{`Harga konstruksi mulai dari ${constructionPrice}`}</div>
        </div>
    )
}
