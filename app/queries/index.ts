import { fetchData } from "../helpers";
import { Post } from "./types";

export const getHomepagePosts = async (): Promise<Post[]> => {
  const data = await fetchData(
    `
        query HomepagePosts {
            posts {
                id
                title
                slug
                featured_image {
                id 
                }
                body
            }
        }
        `,
    {
      variables: {},
    }
  );

  return data.data.posts;
};
