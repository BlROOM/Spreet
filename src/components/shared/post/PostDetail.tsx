"use client";
import React from "react";
import { TPost } from "@/type/post";
import Post from ".";
import Wrapper from "../Wrapper";
import { getPostInfoItems } from "@/data/postInfoItems";

type PostDetail = {
  post: TPost;
};

export default function PostDetail({ post }: PostDetail) {
  const infoItems = getPostInfoItems(post);

  return (
    <Wrapper className="w-full">
      <Post.CoverImg src={post.image} alt={post.title}>
        <div className="flex gap-6">
          <Post.Img
            src={post.image}
            alt={post.title}
            className="max-w-[280px] h-screen-30 rounded-lg relative"
          />
          <div className="flex flex-col gap-1 max-w-[200px]">
            <Post.Title>{post.title}</Post.Title>
            {infoItems.map((item, index) => (
              <Post.InfoItem
                key={index}
                icon={item.icon}
                className={`${index === 0 ? "mt-1" : ""}`}
              >
                {item.label}
              </Post.InfoItem>
            ))}
          </div>
        </div>
        <hr className="text-grayscale-400 w-full my-2" />
        <Post.Price price={post.price} discount={post.discount} />
      </Post.CoverImg>
    </Wrapper>
  );
}
