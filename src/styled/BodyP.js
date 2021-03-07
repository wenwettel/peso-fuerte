import styled from "styled-components";

const createP = (fontSize) => {
  return styled.p`
    font-size: ${fontSize};
    line-height: 1.5;
    color: ${(props) => props.color || "black"};
    font-weight: ${(props) => props.weight || 400};
    margin: ${(props) => props.margin || 0};
  `;
};

export const P1 = createP("1rem");
export const P2 = createP("0.833rem");
