import React from 'react'
import ShinyText from './blocks/TextAnimations/ShinyText/ShinyText'

const WorkingLabel = () => {
  return (
    <div className='w-[300px] flex flex-row items-center  bg-gradient-to-tl from-[#D9D9D9]/40 to-[#737373]/40 p-4 rounded-lg'>
        <div className='w-5 h-5 rounded-full bg-[#D9D9D9]'></div>
        <ShinyText text="Available for work" disabled={false} speed={6} className='text-lg text-white/40  text-center w-full md:text-xl'/>
    </div>
  )
}

export default WorkingLabel