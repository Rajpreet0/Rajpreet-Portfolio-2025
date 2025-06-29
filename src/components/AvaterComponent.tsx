import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface AvaterComponentProps {
    imageSrc?: string;
    isImage?: boolean;
    isFallback?: boolean;
    fallBackText?: string;
}

const AvaterComponent: React.FC<AvaterComponentProps> = ({imageSrc, isImage, isFallback, fallBackText}) => {
  return (
    <Avatar className='h-[125px] w-[125px]'>
        {isImage && (
            <AvatarImage src={imageSrc}/>
        )}

        {isFallback && (
            <AvatarFallback className='text-3xl'>{fallBackText}</AvatarFallback>
        )}
    </Avatar>
  )
}

export default AvaterComponent