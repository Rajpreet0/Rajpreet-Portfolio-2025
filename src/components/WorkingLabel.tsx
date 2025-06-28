import React from 'react'

const WorkingLabel = () => {
  return (
    <div className='w-[300px] flex flex-row items-center  bg-gradient-to-tl from-[#D9D9D9]/40 to-[#737373]/40 p-4 rounded-lg'>
        <div className='w-5 h-5 rounded-full bg-[#D9D9D9]'></div>
        <p className='text-lg text-white text-center w-full md:text-xl'>Available for work</p>
    </div>
  )
}

export default WorkingLabel