import React from 'react'
import { LuDna } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { PiHandbagBold } from "react-icons/pi";


const ProfileCards = () => {
  return (
    <div className='flex gap-4 w-full max-w-6xl items-center justify-center'>
        <div className='w-1/2 flex items-center justify-center'>
            <div className='bg-[#121212] p-2 w-[350px] h-[450px] rounded-2xl border-white border-2'></div>
        </div>
        <div className='w-1/2 flex flex-col  justify-center'>
            <h2 className='text-7xl text-white'>Rajpreet Singh</h2>
            <div className='mt-12 flex items-center gap-4'> 
                <div className='bg-gradient-to-tl from-[#737373]  w-[65px] h-[65px] flex items-center justify-center  rounded-xl'>
                    <LuDna className='text-white w-[40px] h-[40px]'/>
                </div>
                <p className='text-2xl text-white'>Male, 21 Years Old</p>
            </div>
            <div className='mt-6 flex items-center gap-4'> 
                <div className='bg-gradient-to-tl from-[#737373]  w-[65px] h-[65px] flex items-center justify-center  rounded-xl'>
                    <IoLocationOutline className='text-white w-[40px] h-[40px]'/>
                </div>
                <p className='text-2xl text-white'>Frankfurt, Germany</p>
            </div>
            <div className='mt-6 flex items-center gap-4'> 
                <div className='bg-gradient-to-tl from-[#737373]  w-[65px] h-[65px] flex items-center justify-center  rounded-xl'>
                    <PiHandbagBold className='text-white w-[40px] h-[40px]'/>
                </div>
                <p className='text-2xl text-white'>Enterprise Architect @ Commerzbank</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileCards