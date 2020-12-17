import React from "react";
import classNames from "classnames";
import ReactTooltip from "react-tooltip";
import { TextContainer, Text } from "./style";
import { copyTxt } from "../../../utils/computes";

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const split = (str, index) => str.split(" ")[index];

const weights = [
  "weight-light",
  "weight-regular",
  "weight-medium",
  "weight-semibold",
  "weight-bold",
];

const typographies = [
  [
    "display-1 85pt",
    "display-2 74pt",
    "display-3 65pt",
    "display-4 56pt",
    "display-5 49pt",
    "display-6 43pt",
  ],
  [
    "heading-1 37pt",
    "heading-2 32pt",
    "heading-3 28pt",
    "heading-4 24pt",
    "heading-5 21pt",
    "heading-6 18pt",
  ],
  ["body-large 16pt", "body-medium-14 14pt", "body-medium 13pt"],
  ["button-large 13pt", "button-medium 12pt", "button-small 10pt"],
  ["caption 12pt", "overline 10pt", "helper 9pt"],
];

export default () => (
  <TextContainer>
    {weights.map((weight, index) => (
      <Text
        data-tip={weight}
        onClick={() => copyTxt(weight)}
        className={classNames(weight, "heading-1", "pointer")}
        key={`${index + 1}`}
      >
        {capitalize(weight.split("-").reverse().join(" "))}
      </Text>
    ))}
    <br />
    {typographies.map((typography, index) => (
      <React.Fragment key={`${index + 1}`}>
        {typography.map((name, key) => (
          <Text
            data-tip={split(name, 0)}
            onClick={() => copyTxt(split(name, 0))}
            className={classNames(split(name, 0), "pointer")}
            key={`${key + 1}`}
          >
            {capitalize(split(name, 0).split("-").join(" "))}
            {" - "}
            {split(name, 1)}
          </Text>
        ))}
        <br />
      </React.Fragment>
    ))}
    <ReactTooltip />
  </TextContainer>
);
