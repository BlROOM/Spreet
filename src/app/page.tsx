import {
	useRouter,
	usePathname,
	useSearchParams,
	useSelectedLayoutSegment,
	useSelectedLayoutSegments,
	redirect,
	notFound
} from 'next/navigation';
export default function Home() {

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        메인 페이지입니다.
      </main>  
  );
}