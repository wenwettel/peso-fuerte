import React from "react";
import { H6 } from "styled";
import SmallCardStyle from "./SmallCardStyle";

const SmallCard = ({ img, alt, text }) => {
  return (
    <SmallCardStyle>
      <img src={img} alt={alt} />
      <H6>{text}</H6>
    </SmallCardStyle>
  );
};

export default SmallCard;
