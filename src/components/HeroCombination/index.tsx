import { observer } from "mobx-react-lite";
import { CombinationStore } from "../../stores";
import Combination from "./Combination";
import FavoriteButton from "./FavoriteButton";
import "./heroCombination.scss";

const HeroCombination = observer(() => {
  const defaultCombination = CombinationStore.defaultCombination;
  return (
    <section className="heroCombination">
      <div className="heroCombination__image-container">
        <FavoriteButton />
      </div>
      <Combination combination={defaultCombination.combination} />
    </section>
  );
});

export default HeroCombination;
