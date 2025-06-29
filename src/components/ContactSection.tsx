"use client";
import React from 'react'
import WorkingLabel from './WorkingLabel'
import { useRouter } from 'next/navigation'

const ContactSection = () => {
  const router = useRouter();
  return (
    <div className='relative h-[60vh] w-full flex flex-col items-center gap-6 justify-center md:gap-12 md:h-[80vh]'>
        <WorkingLabel/>
        <p className='text-center text-white text-4xl md:text-6xl'>Let's create your <br/> next big idea.</p>
        <button 
          onClick={() => router.push("/contact")}
          className='text-white text-lg border-2 p-2 rounded-full px-8 hover:scale-105 transition-all cursor-pointer'>
            Contact Me
        </button>
    </div>
  )
}

export default ContactSection