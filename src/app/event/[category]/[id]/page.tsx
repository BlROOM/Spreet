import PostMain from "@/components/shared/post/PostMain";
import PostDetail from "@/components/shared/post/PostDetail";

export default async function EventDetail({
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
