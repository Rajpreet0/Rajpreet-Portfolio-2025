"use client";
import React from 'react'
import Folder from './blocks/Components/Folder/Folder'
import Image from 'next/image';
import SplitText from './blocks/TextAnimations/SplitText/SplitText';
import { useRouter } from 'next/navigation';

const ProjectsPage =  () => {

  const router = useRouter();

 const folderItems = [
    <div
      key={0}
      onClick={() => router.push("/projects")}
      className="w-full h-full flex items-center justify-center cursor-pointer"
    >
      <Image
        src="https://cdn.sanity.io/images/2zwh692k/production/b6836dc0a9434f659f33f2f59bb06570a2a83bac-1440x1024.png"
        alt="First Image"
        fill
        className="object-cover rounded-[10px]"
      />
    </div>,
    <div
      key={1}
      onClick={() => router.push("/projects")}
      className="w-full h-full flex items-center justify-center cursor-pointer"
    >
      <Image
        src="https://cdn.sanity.io/images/2zwh692k/production/8edfb7fdfc93be43018c318d0b25f91ddfce667b-1440x1024.png"
        alt="Second Image"
        fill
        className="object-cover rounded-[10px]"
      />
    </div>,
    <div
      key={2}
      onClick={() => router.push("/projects")}
      className="w-full h-full flex items-center justify-center cursor-pointer"
    >
      <Image
        src="https://images.unsplash.com/photo-1750779940698-f24b28d76fd9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Third Image"
        fill
        className="object-cover rounded-[10px]"
      />
    </div>,
    
  ];


  return (
    <div className='relative h-screen w-full flex  flex-col items-center justify-center'>
        <SplitText
          text="My Projects"
          className="text-6xl mb-58 font-bold text-white md:text-8xl"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
       <div>
            <Folder size={2} color="#F8F9FA" items={folderItems}/>
       </div>
    </div>
  )
}

export default ProjectsPage
