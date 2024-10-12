import PostPrice from "./PostPrice";
import PostImg from "./PostImg";
import PostMain from "./PostMain";
import PostTitle from "./PostTitle";
import PostInfoItem from "./PostInfoItem";

const Post = Object.assign(PostMain, {
  Img: PostImg,
  Title: PostTitle,
  InfoItem: PostInfoItem,
  Price: PostPrice,
});

export default Post;
