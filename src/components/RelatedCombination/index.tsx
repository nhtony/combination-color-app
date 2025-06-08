import { observer } from "mobx-react-lite";
import "./relatedCombination.scss";
import CombinationStore from "../../stores/CombinationStore";
import { RelatedCombinationType } from "../../constants/types";

interface ColorCombination {
  relatedCombination: RelatedCombinationType;
}

const RelatedCombinationItem = ({ relatedCombination }: ColorCombination) => {
  const { colors = [] } = relatedCombination;
  return (
    <div className="relatedCombinationItem">
      <div className="relatedCombinationItem__colors">
        {colors.map((color, index) => (
          <div
            key={`${color}-${index}`}
            className="relatedCombinationItem__color"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

const RelatedCombination = observer(() => {
  const defaultCombination = CombinationStore.defaultCombination;
  return (
    <section className="relatedCombination">
      <h3 className="relatedCombination__title">Related Combinations</h3>
      <div className="relatedCombination__grid">
        {defaultCombination.relatedCombinations.map(
          (item: RelatedCombinationType) => (
            <RelatedCombinationItem key={item.id} relatedCombination={item} />
          )
        )}
        <div className="relatedCombinationItem--see-more">
          <button className="relatedCombination__see-more-btn">
            See more combinations
          </button>
        </div>
      </div>
    </section>
  );
});

export default RelatedCombination;
