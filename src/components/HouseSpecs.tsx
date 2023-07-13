import { HouseSpecsProps } from '@/types'
import Image from 'next/image'
import React from 'react'

export default function HouseSpecs({ dimension, wide, floor, bed, containerClassName, childClassName }: HouseSpecsProps) {
    const specs = [
        {
            title: "Dimensi Tanah",
            value: dimension,
            icon: "/icons/spec_dimension.svg"
        },
        {
            title: "Luas Bangunan",
            value: wide,
            icon: "/icons/spec_wide.svg"
        },
        {
            title: "Lantai",
            value: floor,
            icon: "/icons/spec_floor.svg"
        },
        {
            title: "Kamar Tidur",
            value: bed,
            icon: "/icons/spec_bed.svg"
        }
    ]
    return (
        <div className={`grid grid-cols-12 py-3 ${containerClassName}`}>
            {
                specs.map(item => {
                    return (
                        <span className={`flex flex-col items-center text-center ${childClassName}`}>
                            <Image src={item.icon} alt="logo" width={25} height={25} />
                            <div className="text-xs text-gray-500">{item.title}</div>
                            <div className="text-sm">{item.value}</div>
                        </span>
                    )
                })
            }
        </div>
    )
}
