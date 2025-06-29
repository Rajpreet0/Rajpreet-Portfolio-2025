import React from 'react'
import { LuDna } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { PiHandbagBold } from "react-icons/pi";
import TiltedCard from './blocks/Components/TiltedCard/TiltedCard';


const ProfileCards = () => {
  return (
    <div className='flex flex-col md:flex-row gap-6 md:gap-4 w-full max-w-6xl items-center justify-center px-4 md:px-0'>
      <div className='w-full md:w-1/2 flex items-center justify-center'>
        <TiltedCard
          imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          altText="Rajpreet Singh Picture"
          captionText="Rajpreet Singh"
          containerHeight="450px"
          containerWidth="350px"
          imageHeight="450px"
          imageWidth="350px"
          rotateAmplitude={12}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
        />
      </div>
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left'>
        <h2 className='text-4xl md:text-7xl text-white font-bold'>Rajpreet Singh</h2>

        <div className='mt-8 md:mt-12 flex items-center gap-4'>
          <div className='bg-gradient-to-tl from-[#737373] w-[55px] h-[55px] md:w-[65px] md:h-[65px] flex items-center justify-center rounded-xl'>
            <LuDna className='text-white w-[30px] h-[30px] md:w-[40px] md:h-[40px]' />
          </div>
          <p className='text-lg md:text-2xl text-white'>Male, 21 Years Old</p>
        </div>

        <div className='mt-4 md:mt-6 flex items-center gap-4'>
          <div className='bg-gradient-to-tl from-[#737373] w-[55px] h-[55px] md:w-[65px] md:h-[65px] flex items-center justify-center rounded-xl'>
            <IoLocationOutline className='text-white w-[30px] h-[30px] md:w-[40px] md:h-[40px]' />
          </div>
          <p className='text-lg md:text-2xl text-white'>Frankfurt, Germany</p>
        </div>

        <div className='mt-4 md:mt-6 flex items-center gap-4'>
          <div className='bg-gradient-to-tl from-[#737373] w-[55px] h-[55px] md:w-[65px] md:h-[65px] flex items-center justify-center rounded-xl'>
            <PiHandbagBold className='text-white w-[30px] h-[30px] md:w-[40px] md:h-[40px]' />
          </div>
          <p className='text-lg md:text-2xl text-white'>Enterprise Architect @ Commerzbank</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCards