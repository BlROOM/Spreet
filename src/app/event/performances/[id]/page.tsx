import PostMain from "@/components/shared/post/PostMain";
import PostDetail from "@/components/shared/post/PostDetail";

export default async function PostDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <PostMain>
      <PostDetail id={params.id} />
    </PostMain>
  );
}
