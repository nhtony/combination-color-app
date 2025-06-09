import { HexColorPicker } from "react-colorful";
import { useState } from "react";
import "./colorPicker.scss";

interface Props {
  initialColor: string;
  onColorChange: (color: string) => void;
  onClose: () => void;
}

const ColorPicker = ({ initialColor, onColorChange, onClose }: Props) => {
  const [color, setColor] = useState(initialColor);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    onColorChange(newColor);
  };

  return (
    <div className="colorPicker">
      <div className="colorPicker__overlay" onClick={onClose} />
      <div className="colorPicker__content">
        <HexColorPicker color={color} onChange={handleColorChange} />
        <div className="colorPicker__footer">
          <span className="colorPicker__hex">{color}</span>
          <button className="colorPicker__close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;