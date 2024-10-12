import Post from "./inddex";
import { usePost } from "@/components/shared/post/PostMain";
import PostMain from "@/components/shared/post/inddex";
import { TPost } from "@/type/post";
import { useParams } from "next/navigation";

export default function PostDetail() {
  const { post } = usePost();
  const router = useParams();
  console.log(router);
  // ID에 해당하는 post 찾기
  // const selectedPost = post.find((p: TPost) => p.id === Number(id));

  // if (!selectedPost) {
  //   return <div>포스트를 찾을 수 없습니다.</div>;
  // }
  return (
    <>
      <div></div>
      {/* <Post.Img></Post.Img> */}
    </>
  );
}
