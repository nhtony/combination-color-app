import { useEffect, useState } from "react";
import { MainCombination } from "../../../constants/types";
import CheckIcon from "../../common/CheckIcon";
import "./combination.scss";

type Props = {
  combination: MainCombination;
};

const Combination = ({ combination }: Props) => {
  const [clickedIndex, setClickedIndex] = useState<string>("");
  const { colors = [] } = combination;

  const handleClick = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setClickedIndex(hex);
  };

  useEffect(() => {
    setClickedIndex("");
  }, [combination.id]);

  return (
    <div className="combination">
      {colors.map((color) => (
        <div className="combination__content" key={color.hex + combination.id}>
          <div
            className="combination__box"
            style={{ backgroundColor: color.hex }}
            onClick={() => handleClick(color.hex)}
          >
            {clickedIndex === color.hex ? (
              <span className="combination__check">
                <CheckIcon />
              </span>
            ) : (
              <span className="combination__copy">Copy</span>
            )}
          </div>
          <div className="combination__info">
            <span className="combination__info__name">{color.name}</span>
            <span className="combination__info__code">{color.hex}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Combination;
