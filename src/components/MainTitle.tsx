import React from 'react';
import { MainTitleProps } from "@/types";

export default function MainTitle({title, className} : MainTitleProps) {
  return (
    <div className={`text-xl font-semibold my-2 ${className}`}>
        {title}
    </div>
  )
}
