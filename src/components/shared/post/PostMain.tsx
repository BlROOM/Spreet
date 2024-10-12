"use client";

import { TPost } from "@/type/post";
import { postData } from "@/constants/postData";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type PostContext = {
  post: TPost[];
  setPost: (poost: TPost[]) => void;
};

type PostMain = {
  children: ReactNode;
};

export const PostContext = createContext<PostContext | null>(null);
export default function PostMain({ children }: PostMain) {
  const [post, setPost] = useState<TPost[]>([]);
  useEffect(() => {
    if (!postData) return;
    setPost([...postData]);
  }, []);
  return (
    <PostContext.Provider value={{ post, setPost }}>
      {children}
    </PostContext.Provider>
  );
}

export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
};
