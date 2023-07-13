"use client";

import { ButtonProps } from '@/types'
import React from 'react'

export default function Button({text, className, handleClick}: ButtonProps) {
  return (
    <button
        type="button"
        onClick={handleClick}
        className={`custom-btn ${className}`}>
        {text}
    </button>
  )
}
