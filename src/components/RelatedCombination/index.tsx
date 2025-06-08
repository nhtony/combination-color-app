import { observer } from "mobx-react-lite";
import "./relatedCombination.scss";
import CombinationStore from "../../stores/CombinationStore";
import { RelatedCombinationType } from "../../constants/types";
import LikeIcon from "../common/LikeIcon";
import { useState } from "react";

const NUMBER_ITEMS = 5;
interface Props {
  relatedCombination: RelatedCombinationType;
  onClick: (id: number | null) => void;
}
const RelatedCombinationItem = ({ relatedCombination, onClick }: Props) => {
  const { colors = [], name, likes, liked, id } = relatedCombination;
  return (
    <div className="relatedCombinationItem" onClick={() => onClick(id)}>
      <div className="relatedCombinationItem__colors">
        {colors.map((color, index) => (
          <div
            key={`${color}-${index}`}
            className="relatedCombinationItem__color"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="relatedCombinationItem__info">
        <span className="relatedCombinationItem__name">{name}</span>
        <div className="relatedCombinationItem__likes">
          <LikeIcon liked={liked} />
          <span>{likes}</span>
        </div>
      </div>
    </div>
  );
};

const RelatedCombination = observer(() => {
  const [itemsToShow, setItemsToShow] = useState(NUMBER_ITEMS);
  const relatedCombinations =
    CombinationStore.currentCombination.relatedCombinations;

  const handleCombinationClick = (id: number | null) => {
    CombinationStore.setSelectedCombination(id);
  };

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 5);
  };

  const displayedCombinations = relatedCombinations.slice(0, itemsToShow);
  const hasMore = itemsToShow < relatedCombinations.length;

  if (!relatedCombinations?.length) {
    return (
      <section className="relatedCombination">
        <h3 className="relatedCombination__title">Related Combinations</h3>
        <div className="relatedCombination__empty">
          No related combinations found
        </div>
      </section>
    );
  }

  return (
    <section className="relatedCombination">
      <h3 className="relatedCombination__title">Related Combinations</h3>
      <div className="relatedCombination__grid">
        {displayedCombinations.map((item: RelatedCombinationType) => (
          <RelatedCombinationItem
            key={item.id}
            relatedCombination={item}
            onClick={handleCombinationClick}
          />
        ))}
        {hasMore && (
          <div className="relatedCombinationItem--see-more">
            <button
              className="relatedCombination__see-more-btn"
              onClick={handleLoadMore}
            >
              See more combinations
            </button>
          </div>
        )}
      </div>
    </section>
  );
});

export default RelatedCombination;
