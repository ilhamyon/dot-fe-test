import React from 'react'
import Image from 'next/image';
import { SuggestionsProps } from '@/types'
import { BrandDetails, Button, HouseSpecs, MainTitle, Pricing } from '@/components';

interface ImageWithDetails {
    details: SuggestionsProps
}

export default function ImageWithDetails({ details }: ImageWithDetails) {
    const {
        title, logo, brand,
        image, houseType,
        dimension, wide, floor, bed,
        designPrice, constructionPrice
    } = details;
    return (
        <div className="border border-gray-200 rounded-lg p-3 bg-white">
            <Image src={image} alt={title} width={500} height={500} />
            <div className="flex items-center mt-2">
                <MainTitle title={title} />
                <span className="ml-3 py-1 px-3 text-xs bg-gray-100 rounded-xl">{houseType}</span>
            </div>
            <BrandDetails
                logo={logo}
                brand={brand}
            />
            <HouseSpecs
                dimension={dimension}
                wide={wide}
                floor={floor}
                bed={bed}
                containerClassName="border-b border-gray-200"
                childClassName="col-span-3"
            />
            <Pricing
                designPrice={designPrice}
                constructionPrice={constructionPrice}
            />
            <Button
                text="Lihat Detail"
                className="bg-white text-primary-red border border-primary-red w-full hover:bg-slate-100 text-sm btn-small"
            />
        </div>
    )
}
