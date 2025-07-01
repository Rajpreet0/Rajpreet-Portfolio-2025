import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";



const allProjectsQuery = defineQuery(`*[_type == "projcets"] | order(projectPublished desc) {
  _id,
  title,
  "slug": slug.current,
  projectPublished,
  "coverImageUrl": coverImage.asset->url,
  category,
}`);


export async function getAllProjects() {
    const { data } = await sanityFetch({
        query: allProjectsQuery,
    });
    return data;
}