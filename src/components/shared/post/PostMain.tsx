import { Post } from "@/type/post";
import { createContext, ReactNode, useContext } from "react";

type PostContext = {
  post: Post[];
  setPost: (poost: Post) => void;
};

type PostMain = {
  children: ReactNode;
};

export const PostContext = createContext<PostContext | null>(null);
export default function PostMain({ children }: PostMain) {
  return <PostContext.Provider value={null}>{children}</PostContext.Provider>;
}

export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
};
