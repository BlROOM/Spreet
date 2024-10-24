import { getEventsByCategory } from "@/app/server/getPerformances";
import { EventCategory } from "@/type/eventCategory";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { category: string };
}) {
  const queryClient = new QueryClient();
  // !오류!  : layout에서 header를 사용해서 url을 가져오는 시도를 한다면
  // prefetchData를사용할 수 없음?!
  // 해결방안 : [category] 동적세그먼트로 해결
  // const headersList = headers();
  // const pathname = headersList.get("x-pathname");

  let category: EventCategory = "all";
  if (params.category === "performances") {
    category = "performance";
  } else if (params.category === "battles") {
    category = "battle";
  }

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["events", category],
    queryFn: ({ pageParam }) =>
      getEventsByCategory(pageParam as number, category),
    initialPageParam: 1,
    staleTime: 1000 * 60 * 5,
  });

  // 캐시된 데이터를 안전하게 설정 (예시로 'events' 쿼리를 설정)
  // queryClient.setQueryData(['events', category], {
  //   pages: (queryClient.getQueryData(['events', category]) as any)?.pages || [],
  //   pageParams: [0],
  // });
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
