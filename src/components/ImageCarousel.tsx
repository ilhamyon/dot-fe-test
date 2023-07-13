"use client"
import React from 'react'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { BiSolidChevronRight, BiSolidChevronLeft } from 'react-icons/bi';

export default function ImageCarousel() {
  return (
    <div className="custom-carousel">
      <Carousel
        autoPlay
        showStatus={false}
        showIndicators={false}
        renderArrowPrev={(onClick) => {
          return(
            <div 
              onClick={onClick}
              className="absolute bg-white inset-y-1/2 left-10 h-10 flex justify-center items-center p-3 cursor-pointer border border-primary-red z-10">
              <BiSolidChevronLeft/>
            </div>
            )
        }}
        renderArrowNext={(onClick) => {
          return(
          <div 
            onClick={onClick}
            className="absolute bg-white inset-y-1/2 right-10 h-10 flex justify-center items-center p-3 cursor-pointer border border-primary-red z-10">
            <BiSolidChevronRight/>
          </div>
          )
        }}
      >
        {
          [...Array(5)].map(()=> {
            return(
                <div className="w-full relative">
                  <Image objectFit="cover" src="/images/hero-banner.png" alt="hero-banner" width={1200} height={800} className="w-full h-full top-0 left-0 object-cover"/>
                </div>
            )
          })
        }

      </Carousel>
    </div>
  )
}
