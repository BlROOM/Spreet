import CardTitle from "./CardTitle";
import CardMain from "./CardMain";
import CardImg from "./CardImg";
import CardAuthor from "./CardAuthor";

const Card = Object.assign(CardMain, {
  Img: CardImg,
  Title: CardTitle,
  Author: CardAuthor,
});

export default Card;
