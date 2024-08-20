import LoginModal from "./_component/Login/LoginModal";
import MainCarousel from "./_component/MainCarousel";

export default function Home() {
  return (
    <main className="relative flex justify-center">
      <MainCarousel />
      <LoginModal />
    </main>
  );
}
