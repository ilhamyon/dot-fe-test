import { ImageCardProps } from '@/types'
import Image from 'next/image';
import React from 'react'

export default function ImageCard({ title, desc, imagePath }: ImageCardProps) {
    return (
        <div className="flex flex-col border border-gray-200 rounded-lg p-3 bg-white">
            <Image src={imagePath} alt={title} width={500} height={500} />
            <h1 className="mt-5 font-semibold">{title}</h1>
            <p className="text-xs">{desc}</p>
        </div>
    )
}
