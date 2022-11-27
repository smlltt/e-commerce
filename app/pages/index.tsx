import type { NextPage } from "next";
import Head from "next/head";
import { PostCard } from "../components";
import graphqlRequestClient from "../helpers/graphlRequestClient";
import {
  GetAllPostsQuery,
  useGetAllPostsQuery,
} from "../queries/generated/graphql";

//usual approach left for reference

// import { gql } from "graphql-request";
// export const GET_ALL_POSTS_QUERY = gql`
//   query GetAllPosts {
//     posts {
//       id
//       title
//       slug
//       featured_image {
//         id
//       }
//       body
//     }
//   }
// `;

const Home: NextPage = () => {
  // const { data, isLoading, error } = useQuery<GraphQLResponse, Error, Post[]>(
  //   ["posts"],
  //   async () => {
  //     return graphqlRequestClient.request(GET_ALL_POSTS_QUERY);
  //   },
  //   { select: (response) => response.posts }
  // );

  //instead of the above, I can use the query generated via codegen:
  const { data, isLoading, error } = useGetAllPostsQuery<
    GetAllPostsQuery,
    Error
  >(graphqlRequestClient, {});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="flex flex-col items-center py-2 max-w-7xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={" w-full flex flex-row justify-center space-x-5"}>
        {data?.posts.map((post) => (
          //TODO review in the future
          // @ts-ignore
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
