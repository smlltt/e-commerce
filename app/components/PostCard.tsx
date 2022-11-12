import React, { FC } from "react";
import { Post } from "../queries/types";

interface PostCardPros {
  post: Post;
}

const PostCard: FC<PostCardPros> = ({ post }) => {
  return (
    <div>
      <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
        <img
          src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/${post.featured_image.id}`}
          alt="plant"
          className="h-auto w-full"
        />
        <div className="p-5">
          <p className="text-medium mb-5 text-gray-700 font-semibold">
            {post.title}
          </p>
          <p className="text-medium mb-5 text-gray-700">{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
