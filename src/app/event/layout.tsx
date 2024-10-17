import { getEventsByCategory } from "@/app/server/getPerformances";
import { EventCategory } from "@/type/eventCategory";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { headers } from "next/headers";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  // !오류!  : layout에서 header를 사용해서 url을 가져오는 시도를 한다면
  // prefetchDataf를사용할 수 없음?!

  const headersList = headers();
  const pathname = headersList.get("x-pathname");
  let category: EventCategory = "all";
  if (pathname === "/events/performances") {
    category = "performance";
  } else if (pathname === "/events/battles") {
    category = "battle";
  }
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["events", category],
    queryFn: ({ pageParam }) =>
      getEventsByCategory(pageParam as number, category),
    initialPageParam: 1,
    staleTime: 1000 * 60 * 5,
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
