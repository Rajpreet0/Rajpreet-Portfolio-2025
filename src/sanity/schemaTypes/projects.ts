import { defineField, defineType } from "sanity";


export default defineType({
    name: 'projcets',
    title: 'Projects',
    type: 'document',
    description: 'Projects Page for the Rajpreet Portfolio',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (rule) => rule.required() 
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {source: 'title'},
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'projectPublished',
            type: 'number',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'coverImage',
            type: 'image'
        }),
        defineField({
            name: 'description',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'link',
            type: 'url',
            validation: (rule) => rule.required().uri({
                scheme: ["http", "https"],
            })
        }),
        defineField({
            name: 'role',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'client',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'labels',
            title: 'Labels',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        }),
        defineField({
            name: 'category',
            title: 'Category Programming',
            type: 'string',
            options: {
                list: [
                    { title: 'Development', value: 'development' },
                    { title: 'Design', value: 'design' },
                    { title: 'Development & Design', value: 'developementAndDesign'}
                ]
            }
        }),
        defineField({
            name: 'text',
            title: 'Text',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (rule) => rule.required()
        }),

    ]
})




/*

EVERYTHING

*[_type == "projcets"] | order(projectPublished desc) {
  _id,
  title,
  "slug": slug.current,
  projectPublished,
  "coverImageUrl": coverImage.asset->url,
  description,
  link,
  role,
  client,
  labels,
  category,
  "text": text[] {
    children[] {
      _type,
      text
    }
  }
}

*/