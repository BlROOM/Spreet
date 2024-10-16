"use client";
import React from "react";
import { TPost } from "@/type/post";
import Post from ".";
import Wrapper from "../Wrapper";
import { getPostInfoItems } from "@/data/postInfoItems";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPerformanceById } from "@/app/server/getPerformances";

type PostDetail = {
  id: string;
};

export default function PostDetail({ id }: PostDetail) {
  const queryClient = useQueryClient();

  // 리스트에서 캐싱된 데이터 가져오기 (없으면 undefined 반환)
  const cachedData = queryClient.getQueryData<TPost>(["performance", id]);

  const {
    data: post,
    error,
    isLoading,
    isFetching,
  } = useQuery<TPost, Error>({
    queryKey: ["performance", id],
    queryFn: () => getPerformanceById(id),
    initialData: cachedData, // 캐시된 데이터를 먼저 사용
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading || !cachedData) {
    return (
      <div className="w-[100vw] h-[100vh] text-grayscale-100">Loading...</div>
    );
  }
  if (error || !post) return <div>{(error as Error).message}</div>;

  const infoItems = getPostInfoItems(post);

  return (
    <Wrapper className="w-1/2">
      <Post.CoverImg src={post.image} alt={post.title}>
        <div className="flex gap-6">
          <Post.Img
            width={250}
            height={250}
            src={post.image}
            alt={post.title}
            className="h-screen-40 rounded-lg relative"
          />
          <div className="flex flex-col gap-2 w-1/2">
            <Post.Title>{post.title}</Post.Title>
            {infoItems.map((item, index) => (
              <Post.InfoItem
                key={index}
                icon={item.icon}
                className={`${index === 0 ? "mt-2" : ""}`}
              >
                {item.label}
              </Post.InfoItem>
            ))}
          </div>
        </div>
        <hr className="text-grayscale-400 w-full my-2" />
        <Post.Price
          price={post.price}
          discountedPrice={post?.discounted_price}
          description={post.discount_description}
        />
      </Post.CoverImg>
    </Wrapper>
  );
}
