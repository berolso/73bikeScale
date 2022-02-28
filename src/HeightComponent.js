import React, { useState } from "react";
import VerticalSlider from "./VerticalSlider";
import ImageBox from "./ImageBox";

export default function HeightComponent() {
  const [sliderValue, setsliderValue] = useState(0);

  return (
    <div>
      <div className="container">
        <ImageBox sliderValue={sliderValue} />
        <div className="slider">
          <VerticalSlider
            sliderValue={sliderValue}
            setsliderValue={setsliderValue}
          />
        </div>
      </div>
    </div>
  );
}
