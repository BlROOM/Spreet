import LoginModal from "../component/login/LoginModal";
import MainCarousel from "../component/MainCarousel";

export default function Home() {
  return (
    <main className="relative flex justify-center">
      <MainCarousel />
      <LoginModal />
    </main>
  );
}
