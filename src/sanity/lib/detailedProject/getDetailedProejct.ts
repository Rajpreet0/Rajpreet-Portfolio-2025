import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";


const detailedProjectQuery = defineQuery(`*[_type == "projcets" && slug.current==$slug] | order(projectPublished desc) {
  _id,
  title,
  "coverImageUrl": coverImage.asset->url,
  description,
  link,
  role,
  client,
  labels,
  text
}`);

export async function getDetailedProjectQuery(slug: string) {
    const {data} = await sanityFetch({
        query: detailedProjectQuery,
        params: { slug },
    });
    return data;
}