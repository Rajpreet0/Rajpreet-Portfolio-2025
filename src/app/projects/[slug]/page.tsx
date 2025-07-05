import Label from '@/components/Label'
import { getDetailedProjectQuery } from '@/sanity/lib/detailedProject/getDetailedProejct'
import { MoveLeft } from 'lucide-react'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import React  from 'react'

const DetailProjectPage =  async ({ params }: { params: Promise<{ slug: string }>}) => {

  const { slug } = await params;
  const detailProjects = await getDetailedProjectQuery(slug);


  const {
    title,
    coverImageUrl,
    description,
    link,
    role,
    client,
    labels,
  } = detailProjects[0]

  const portableComponents: PortableTextComponents = {
    block: {
      h1: ({ children }) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
      h2: ({ children }) => <h2 className="text-2xl font-semibold my-3">{children}</h2>,
      h3: ({ children }) => <h3 className='text-xl my-2'>{children}</h3>,
      normal: ({ children }) => <p className="my-2 leading-relaxed text-lg">{children}</p>,
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc list-inside ml-4">{children}</ul>,
    },
    listItem: {
      bullet: ({ children }) => <li>{children}</li>,
    },
    marks: {
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
    },
  }

  return (
    <div className="w-full min-h-screen flex flex-col px-8 py-12 text-white bg-black">
      <Link href="/projects" className="p-2 flex items-center justify-start w-fit gap-4 mb-8">
        <MoveLeft />
        <p className="text-lg">Back to Projects</p>
      </Link>

      <div className="w-full flex justify-center mb-12">
        <Image
          src={coverImageUrl}
          alt={`${title} Banner`}
          width={800}
          height={250}
          className="rounded-lg object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 md:text-5xl">{title}</h1>
        <p className="text-lg mb-8 max-w-4xl">
          {description}
        </p>

        <div className="flex flex-wrap  gap-4 mb-8">
         {labels?.map((label: string) => (
            <Label key={label} text={label} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6">
          <div className="flex flex-col md:flex-row md:items-center md:gap-16">
            <div>
              <p className="text-neutral-400 mb-1">Roles:</p>
              <p>{role}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-neutral-400 mb-1">Client:</p>
              <p>{client}</p>
            </div>
          </div>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border cursor-pointer border-white hover:bg-white hover:text-black hover:scale-105 transition-all w-fit"
            >
              Check it out
            </a>
          )}
        </div>

        {detailProjects[0].text && (
          <div className="max-w-4xl mx-auto mt-12 prose prose-invert prose-lg">
            <PortableText value={detailProjects[0].text} components={portableComponents} />
          </div>
        )}
        
      </div>
    </div>
  )
}

export default DetailProjectPage