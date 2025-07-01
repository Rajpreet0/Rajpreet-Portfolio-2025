import AllProjectView from '@/components/AllProjectView'
import Footer from '@/components/Footer'
import { getAllProjects } from '@/sanity/lib/allProjects/getAllProjects'
import React from 'react'

const Projects = async () => {

  const allProjects = await getAllProjects();

    return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center">
      <div className="w-full flex flex-col mt-12 justify-center items-center">
        <p className='text-center text-white text-5xl'>Createing next level digital <br/> products </p>
                <div className='mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-26 w-full max-w-6xl px-4'>
                    {allProjects.map((project, index) => (
                      <div key={project._id} className={index % 2 === 1 ? "mt-20" : "" }>
                        <AllProjectView
                            category={project.category}
                            imageSrc={project.coverImageUrl}
                            projectPublished={project.projectPublished}
                            slug={project.slug}
                            title={project.title}
                        />
                      </div>
                    ))}
                </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects
