import React from 'react'
import { Breadcumbs, ImageCarousel } from '@/components'


export default function Hero() {
  return (
    <div className="hero">
        <div className="hero_breadcumbs"><Breadcumbs /></div>
        <div className="hero_slider"><ImageCarousel /></div>
    </div>
  )
}
