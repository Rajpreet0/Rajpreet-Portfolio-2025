import React from 'react'
import WorkingLabel from './WorkingLabel'
import AvaterComponent from './AvaterComponent'
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const ContactPage = () => {
  return (
    <div className='relative min-h-screen w-full flex flex-col md:flex-row-reverse items-center justify-center px-4 py-12 md:gap-24'>
      <div className='flex flex-col items-center justify-center w-full md:w-1/2 md:items-start max-w-xl space-y-6 md:mt-24'>
        <WorkingLabel />
        <AvaterComponent isFallback fallBackText='RS' />
        <p className='text-white text-center md:text-left text-lg md:text-xl max-w-md md:max-w-none'>
          My inbox is always open, whether you have a project or just want to say hi.
          Feel free to contact me, and I’ll get back to you.
        </p>
        <div className='flex items-center gap-5'>
          <a
            href='https://www.linkedin.com/in/rajpreet-singh-988582273/'
            className='cursor-pointer hover:scale-110 transition-all'
          >
            <FiLinkedin className='w-6 h-6 text-white' />
          </a>
          <a
            href='https://github.com/Rajpreet0'
            className='cursor-pointer hover:scale-110 transition-all'
          >
            <LuGithub className='w-6 h-6 text-white' />
          </a>
          <a
            href='mailto:rajpreet.singh@gmx.de'
            className='cursor-pointer hover:scale-110 transition-all'
          >
            <MdOutlineEmail className='w-6 h-6 text-white' />
          </a>
        </div>
      </div>

      <div className='flex flex-col items-center md:items-start justify-center w-full md:w-1/2 max-w-xl mt-8 md:mt-0 space-y-6'>
        <p className='text-white text-3xl md:text-5xl font-semibold leading-tight text-center md:text-left'>
          Let’s start a project together
        </p>

        <form className='w-full flex flex-col space-y-4'>
          {/* Full Name */}
          <div className='flex flex-col w-full'>
            <label htmlFor='fullName' className='text-white text-lg mb-1'>
              Full Name
            </label>
            <input
              type='text'
              id='fullName'
              className='bg-transparent border border-gray-400 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white transition'
            />
          </div>

          {/* Email */}
          <div className='flex flex-col w-full'>
            <label htmlFor='email' className='text-white text-lg mb-1'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='bg-transparent border border-gray-400 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white transition'
            />
          </div>

          {/* Message */}
          <div className='flex flex-col w-full'>
            <label htmlFor='message' className='text-white text-lg mb-1'>
              Message
            </label>
            <textarea
              id='message'
              rows={5}
              className='bg-transparent border border-gray-400 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white transition resize-none'
            />
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='mt-2 px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-gray-900 transition-all w-full md:w-auto'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage