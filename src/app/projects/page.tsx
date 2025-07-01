import Footer from '@/components/Footer'
//import { getAllProjects } from '@/sanity/lib/allProjects/getAllProjects'
import React from 'react'

const Projects = async () => {

    // const allProjects = await getAllProjects();
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center">
      <div className="w-full flex flex-col items-center">
        <p>Hallo</p>
      </div>
      <Footer />
    </div>
  )
}

export default Projects
