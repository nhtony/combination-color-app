import { observer } from "mobx-react-lite";
import Combination from "./Combination";
import FavoriteButton from "./FavoriteButton";
import { CombinationStore } from "../../stores";
import "./heroCombination.scss";

const HeroCombination = observer(() => {
  const combination = CombinationStore.currentCombination.combination;
  return (
    <section className="heroCombination">
      <div
        className="heroCombination__image-container"
        style={{
          backgroundImage: `url(images/${combination?.featuredImage?.url})`,
        }}
      >
        <FavoriteButton likes={combination.likes} liked={combination.liked} />
      </div>
      <Combination combination={combination} />
    </section>
  );
});

export default HeroCombination;
