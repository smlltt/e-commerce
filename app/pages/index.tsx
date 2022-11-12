import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";
import { getHomepagePosts } from "../queries";
import { PostCard } from "../components";

const Home: NextPage = () => {
  const {
    data: posts,

    isSuccess,
  } = useQuery("posts", async () => getHomepagePosts());

  return (
    <div className="flex flex-col items-center py-2 max-w-7xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={" w-full flex flex-row justify-center space-x-5"}>
        {isSuccess &&
          posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Home;
