import { createContext, ReactNode, useContext } from "react";

type PostContext = {
  selectedItem: string | null;
  setSelectedItem: (item: string) => void;
};

type PostMain = {
  children: ReactNode;
};

export const Post = createContext<PostContext | null>(null);
export default function SidebarMain({ children }: PostMain) {
  return <Post.Provider value={null}>{children}</Post.Provider>;
}

export const usePost = () => {
  const context = useContext(Post);
  if (!context) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
};
