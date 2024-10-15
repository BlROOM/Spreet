// app/performances/layout.tsx
import { getPerformances } from "@/app/server/getPerformances";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Layout({ children }: React.PropsWithChildren) {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["performances"],
    queryFn: ({ pageParam }) => getPerformances(pageParam as number),
    initialPageParam: 1,
    staleTime: 1000 * 60 * 5,
  });
  const dehydratedState = dehydrate(queryClient);
  // console.log(queryClient.getQueryState(["performances"]));

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
