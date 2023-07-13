import React from 'react';
import { ReviewProps } from '@/types';
import { HiUserCircle, HiStar } from "react-icons/hi";

export default function Review({username, star, review}: ReviewProps) {
  return (
    <div className="flex mb-4">
        <span className="mr-3"><HiUserCircle fontSize={40} className="text-gray-400"/></span>
        <span className="flex flex-col text-sm">
            <div className="flex mb-1">
                <span className="font-semibold pr-2 border-e border-gray-200 " >{username}</span>
                <span className="flex items-center pl-2"><HiStar fontSize={16} className="text-yellow-500 mr-1"/> {star}</span>
            </div>
            <div className="text-gray-600">{review}</div>
        </span>
    </div>
  )
}
