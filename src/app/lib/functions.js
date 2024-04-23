import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../../../sanity/env";
// import { ImageUrlBuilder } from "@sanity/image-url/lib/image.js";

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false,
});

export async function getProducts(category) {
  const result = await client.fetch(`*[_type == "${category}"]`, {
    next: { revalidate: 3600 },
  });
  return result;
}

export async function getAllProducts() {
  const result = await client.fetch(`*[]`, {
    next: { revalidate: 3600 },
  });
  return result;
}

export async function getSearch(search) {
  const searchTerm = search;
  const result = await client.fetch(`*[name match "${searchTerm}*"]`, {
    next: { revalidate: 3600 },
  });
  return result;
}

// export const builder = ImageUrlBuilder(client);

// export function urlFor(source) {
//   return builder.image(source);
// }
