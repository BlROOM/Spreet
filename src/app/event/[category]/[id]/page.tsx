import PostMain from "@/components/shared/post/PostMain";
import PostDetail from "@/components/shared/post/PostDetail";
import Calendar from "@/components/calendar/Calendar";

export default async function EventDetail({
  params,
}: {
  params: { id: string };
}) {
  return (
    <section className="w-full h-[100%] flex gap-x-6">
      <PostMain>
        <PostDetail id={params.id} />
      </PostMain>
      <Calendar id={params.id} />
    </section>
  );
}
