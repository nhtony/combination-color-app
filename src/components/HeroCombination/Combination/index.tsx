import { useEffect, useState } from "react";
import { MainCombination } from "../../../constants/types";
import CheckIcon from "../../common/CheckIcon";
import ColorPicker from "../../ColorPicker";
import { CombinationStore } from "../../../stores";
import "./combination.scss";
type Props = {
  combination: MainCombination;
};

const Combination = ({ combination }: Props) => {
  const [clickedIndex, setClickedIndex] = useState<string>("");
  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(
    null
  );
  const { colors = [], id } = combination;

  const handleClick = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setClickedIndex(hex);
  };

  const handleColorCodeClick = (event: React.MouseEvent, index: number) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedColorIndex(index);
  };

  const handleColorChange = (newColor: string) => {
    if (selectedColorIndex !== null && id) {
      CombinationStore.updateCombinationColor(id, selectedColorIndex, newColor);
    }
  };

  useEffect(() => {
    setClickedIndex("");
  }, [combination.id]);

  return (
    <div className="combination">
      {colors.map((color, index) => (
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
            <span
              className="combination__info__code"
              onClick={(e) => handleColorCodeClick(e, index)}
            >
              {color.hex}
            </span>
          </div>
        </div>
      ))}
      {selectedColorIndex !== null && (
        <ColorPicker
          initialColor={colors[selectedColorIndex].hex}
          onColorChange={handleColorChange}
          onClose={() => setSelectedColorIndex(null)}
        />
      )}
    </div>
  );
};

export default Combination;
