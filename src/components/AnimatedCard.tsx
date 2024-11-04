import Image, { StaticImageData } from "next/image";
import ExtendedLink from "./ExtendedLink";

type AnimatedEventCard = {
  logo: StaticImageData; // 이미지 파일을 import한 경우
  animationRef: {
    // ref 객체와 isVisible 상태
    elementRef: React.RefObject<HTMLElement>;
    isVisible: boolean;
  };
  alt: string; // 이미지 alt 텍스트
  title: string; // 제목
  content: string; // 내용
  href: string; // 링크 URL
  className: string;
};

export default function AnimatedEventCard({
  logo,
  animationRef,
  alt,
  title,
  content,
  href,
  className,
}: AnimatedEventCard) {
  return (
    <ExtendedLink href={href}>
      <article ref={animationRef.elementRef} className={className}>
        <div className="flex">
          <Image
            src={logo}
            alt={alt}
            objectFit="cover"
            className="w-1/2 rounded-2xl"
          />
          <header className="text-center w-1/2 p-10">
            <h4 className="h4 mb-8 tracking-wide">{title}</h4>
            <p className="b2 whitespace-pre-line">{content}</p>
          </header>
        </div>
      </article>
    </ExtendedLink>
  );
}
