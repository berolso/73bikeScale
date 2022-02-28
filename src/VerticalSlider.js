import * as React from "react";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: `2' 7"`,
  },
  {
    value: 100,
    label: `7' 0"`,
  },
];
export default function VerticalSlider({ sliderValue, setsliderValue }) {
  const handleChange = (evt) => {
    setsliderValue(evt.target.value);
  };

  const heightConversion = () => {
    // 2'7" = 79cm
    // 7' = 213cm

    const inCentimeters = () => {
      const maxCM = 213;
      const minCM = 77;
      const centimeterRange = maxCM / minCM / 2.04;
      return (sliderValue * centimeterRange + 77).toFixed(0);
    };

    const inFeetAndInches = () => {
      const totalFeet = inCentimeters() * 0.03305;
      const feet = Math.floor(totalFeet);
      const inches = Math.round((totalFeet - feet) * 12);
      return `${feet}' ${inches}"`;
    };

    return `${inCentimeters()}cm or ${inFeetAndInches()}`;
  };

  return (
    <Stack sx={{ height: `${40}%` }} direction="row">
      <Slider
        orientation="vertical"
        marks={marks}
        value={sliderValue}
        onChange={handleChange}
        valueLabelDisplay={"auto"}
        valueLabelFormat={heightConversion}
      />
    </Stack>
  );
}
