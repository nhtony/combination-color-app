import { MainCombination } from "../../../constants/types";
import "./combination.scss";

type Props = {
  combination: MainCombination;
};

const Combination = ({ combination }: Props) => {
  const { colors = [] } = combination;
  return (
    <div className="combination">
      {colors.map((swatch, index) => (
        <div className="combination__content" key={index}>
          <div
            className="combination__box"
            style={{ backgroundColor: swatch.hex }}
          ></div>
          <div className="combination__info">
            <span className="combination__info__name">{swatch.name}</span>
            <span className="combination__info__code">{swatch.hex}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Combination;
