import PostImg from "./PostImg";

type PostCoverImg = {
  src: string;
  alt: string;
  children: React.ReactNode;
};
export default function PostCoverImage({
  src,
  alt,
  children,
  ...props
}: PostCoverImg) {
  return (
    <PostImg
      src={src}
      alt={alt}
      className="w-full h-[500px] rounded-lg relative"
      {...props}
    >
      <div className="bg-grayscale-800 absolute w-full h-[100%] top-0 opacity-75" />
      <div className="absolute flex flex-col bottom-2 z-10 p-4">{children}</div>
    </PostImg>
  );
}
