import { createClient, groq } from "next-sanity";

export async function getPictures() {
  const client = createClient({
    projectId: "u2arln1y",
    dataset: "production",
    apiVersion: "2023-12-22",
  });

  return client.fetch(
    groq`*[_type == "pictures"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
    }`
  );
}
