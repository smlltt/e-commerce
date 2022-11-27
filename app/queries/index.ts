import { gql } from "graphql-request";

export const GET_ALL_POSTS_QUERY = gql`
  query GetAllPosts {
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
`;
