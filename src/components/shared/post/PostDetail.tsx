"use client";
import React from "react";
import { TPost } from "@/type/post";
import Post from ".";

type PostDetail = {
  post: TPost;
};

export default function PostDetail({ post }: PostDetail) {
  return (
    <>
      <Post.Img src={post.image} alt={post.title} /> {/* 이미지 */}
      <Post.Title>{post.title}</Post.Title> {/* 제목 */}
      {/* <Post.InfoItem icon={ 아이콘 컴포넌트 }>{post.info}</Post.InfoItem> */}
      {/* 추가 정보 */}
      <Post.Price price={post.price} discount={post.discount} /> {/* 가격 */}
    </>
  );
}
