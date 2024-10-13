import PostMain from "@/components/shared/post/PostMain";
import PostDetail from "@/components/shared/post/PostDetail";
import { TPost } from "@/type/post";
import { postData } from "@/constants/postData";

export default async function PostDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // console.log(params, "params");
  const post: TPost | undefined = postData.find(
    (p) => p.id === Number(params.id)
  );
  // todo : 에러 페이지 작성
  if (!post) {
    return <div>포스트를 찾을 수 없습니다.</div>;
  }

  return (
    <PostMain>
      <PostDetail post={post} />
    </PostMain>
  );
}
