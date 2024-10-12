import SideBar from "@/components/SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex gap-10 max-w-[1280px] m-auto pt-[96px] text-grayscale-100">
      {/* 사이드바 */}
      <SideBar />
      {/* 메인 콘텐츠 */}
      <div className="p-6">{children}</div>
    </main>
  );
}
