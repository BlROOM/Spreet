import LoginModal from "@/components/login/LoginModal";
import MainCarousel from "@/components/MainCarousel";

export default function Home() {
  return (
    <main className="relative flex justify-center">
      <MainCarousel />
      <LoginModal />
    </main>
  );
}
