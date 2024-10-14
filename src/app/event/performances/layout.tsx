import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const getPerformances = async () => {
  const res = await fetch("/api/performances");
  if (!res.ok) throw new Error("Failed to fetch performances");
  return res.json();
};

export default async function Layout({ children }: React.PropsWithChildren) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["performances"],
    queryFn: getPerformances,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
