import { Slider } from "./style";
import React from "react";
const marks = {
  0: "0",
  100: "100",
  300: "200",
  500: "500",
  1000: "1000",
};

const ShowSlider = () => (
  <>
    <Slider marks={marks} defaultValue={100} />
  </>
);

export default ShowSlider;
