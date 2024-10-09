import PostTitle from "./PostTitle";
import PostMain from "./PostMain";
import PostImage from "./PostImg";
import PostAuthor from "./PostAuthor";

const Post = Object.assign(PostMain, {
  Img: PostImage,
  Title: PostTitle,
  Author: PostAuthor,
});

export default Post;
