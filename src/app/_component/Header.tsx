import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-blue-800 text-white py-4 flex justify-center">
      <div className="container mx-auto px-4 flex align-middle justify-between">
        <nav>
          <h1 className="text-2xl font-bold">Spreet</h1>
          <p className="text-sm">Spreed Street culture</p>
        </nav>
        <nav>
          <ul className="flex gap-3">
            <li>
              <Link href="./search">행사</Link>
            </li>
            <li>
              <Link href="./">강의</Link>
            </li>
            <li>
              <Link href="./login">로그인</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
