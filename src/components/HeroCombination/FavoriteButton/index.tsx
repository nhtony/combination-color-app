import LikeIcon from "../../common/LikeIcon";
import "./favoriteButton.scss";

interface Props {
  likes: number;
  liked: boolean;
}

const FavoriteButton = ({ likes, liked }: Props) => {
  return (
    <button className="favorite-button">
      <LikeIcon liked={liked} />
      {likes}
    </button>
  );
};

export default FavoriteButton;
