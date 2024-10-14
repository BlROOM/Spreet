import { ReactNode } from "react";
import { usePerformanceStore } from "@/store/usePerformances";

// type PostContext = {
//   performances: TPost[];
// };

type PostMain = {
  children: ReactNode;
};

// export const PostContext = createContext<PostContext | null>(null);
export default function PostMain({ children }: PostMain) {
  return <>{children}</>;
}

// export const usePost = () => {
//   const context = useContext(PostContext);
//   if (!context) {
//     throw new Error("usePost must be used within a PostProvider");
//   }
//   return context;
// };
