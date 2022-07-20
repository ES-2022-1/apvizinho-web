import { Slider } from "antd";
import React from "react";
const marks = {
  0: "0",
  25: "25",
  50: "50",
  75: "75",
  100: "100",
};

const ShowSlider = () => (
  <>
    <Slider marks={marks} defaultValue={50} />
  </>
);

export default ShowSlider;
