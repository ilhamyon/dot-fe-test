import React from 'react'
import { GoCheckCircleFill } from "react-icons/go";
import Button from './Button';
import { BrandDetails, MainTitle, HouseSpecs, Pricing } from "@/components";
import { DetailsProps } from '@/types';

interface DetailsCardProps {
  details: DetailsProps
}

export default function DetailsCard({ details }: DetailsCardProps) {
  const {title, logo, brand, houseType,
    designType, dimension,
    wide, floor, bed, designPrice,
    constructionPrice} = details;
  return (
    <div className="border border-gray-200 rounded-xl py-3 px-5 bg-white">
        <MainTitle title={title} />
        <BrandDetails
          logo={logo}
          brand={brand}
        />
        <div className="text-sm py-3">
            <div className="grid grid-cols-7 gap-2 mb-2">
              <span className="col-span-2">Jenis Rumah</span>
              <span className="col-span-5">{houseType}</span>
            </div>
            <div className="grid grid-cols-7 gap-2 mb-2">
              <span className="col-span-2">Tipe Desain</span>
              <span className="col-span-5 text-primary-red flex items-center">
                <GoCheckCircleFill className="mr-1" />
                {designType}
              </span>
            </div>
        </div>
        <HouseSpecs 
          dimension={dimension}
          wide={wide}
          floor={floor}
          bed={bed}
          containerClassName="border-y border-gray-200"
          childClassName="col-span-3"
        />
        <Pricing
          designPrice={designPrice}
          constructionPrice={constructionPrice}
        />
        <Button 
          text="Konsultasi Sekarang"
          className="bg-primary-red text-white w-full hover:bg-primary-red-darker mb-4"
        />
    </div>
  )
}
