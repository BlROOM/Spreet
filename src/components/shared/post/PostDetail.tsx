"use client";
import React from "react";
import { TPost } from "@/type/post";
import Post from ".";
import Wrapper from "../Wrapper";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { GrMapLocation } from "react-icons/gr";
import { FaRegQuestionCircle } from "react-icons/fa";

type PostDetail = {
  post: TPost;
};

export default function PostDetail({ post }: PostDetail) {
  return (
    <Wrapper className="w-full">
      <Post.Img
        src={post.image}
        alt={post.title}
        className="w-full h-screen-70 rounded-lg relative"
      >
        <div className="bg-grayscale-700 absolute w-full h-[100%] top-0 opacity-75 mix-blend-multiply" />
        <div className="absolute flex flex-col bottom-2 z-50 p-4">
          <div className="flex gap-6">
            <Post.Img
              src={post.image}
              alt={post.title}
              className="max-w-[280px] h-screen-30 rounded-lg relative"
            />
            <div className="flex flex-col gap-1 max-w-[200px]">
              <Post.Title>{post.title}</Post.Title>
              <Post.InfoItem icon={FaCalendarAlt} className="mt-1">
                {post.duration}
              </Post.InfoItem>
              <Post.InfoItem icon={IoMdTime}>
                {post.operatingHours}
              </Post.InfoItem>
              <Post.InfoItem icon={GoPeople}>{post.ageRating}</Post.InfoItem>
              <Post.InfoItem icon={GrMapLocation}>
                {post.location}
              </Post.InfoItem>
              <Post.InfoItem icon={FaRegQuestionCircle}>
                {post.genre}
              </Post.InfoItem>
            </div>
          </div>
          <hr className="text-grayscale-400 w-full my-2" />
          <Post.Price price={post.price} discount={post.discount} />
        </div>
      </Post.Img>
    </Wrapper>
  );
}
