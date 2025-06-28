import React from 'react'
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='p-4 w-full flex flex-row items-center justify-around'>
        <div>
            <p className='text-white text-md'>&copy;2025 Rajpreet Singh. All Rights reserverd.</p>
        </div>

        <div className='flex flex-row gap-4'>
            <a href='https://www.linkedin.com/in/rajpreet-singh-988582273/' className='cursor-pointer hover:scale-110 transition-all'>
                <FiLinkedin className='w-6 h-6 text-white '/>
            </a>
            <a href='https://github.com/Rajpreet0' className='cursor-pointer hover:scale-110 transition-all'>
                <LuGithub className='w-6 h-6 text-white'/>
            </a>
            <a href='mailto:rajpreet.singh@gmx.de' className='cursor-pointer hover:scale-110 transition-all'>
                <MdOutlineEmail className='w-6 h-6 text-white'/>
            </a>
        </div>
    </div>
  )
}

export default Footer