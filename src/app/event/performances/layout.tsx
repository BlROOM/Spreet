import { getPerformances } from "@/app/server/getPerformances";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Layout({ children }: React.PropsWithChildren) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["performances"],
    queryFn: getPerformances,
    staleTime: 1000 * 60 * 5,
  });
  const dehydratedState = dehydrate(queryClient);
  // console.log(queryClient.getQueryState(["performances"]));

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
