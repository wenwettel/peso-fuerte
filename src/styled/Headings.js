import styled from "styled-components";
import breakpoints from "./breakpoints";

const createHeader = (headingType, desktop, mobile) => {
  return styled[headingType]`
    font-size: ${mobile.fontSize};
    font-weight: ${mobile.fontWeight};
    line-height: 1.2;
    color: ${(props) => props.color || "black"};

    @media screen and (min-width: ${breakpoints.lg}px) {
      font-size: ${desktop.fontSize};
      font-weight: ${desktop.fontWeight};
    }
  `;
};

export const H1 = createHeader(
  "h1",
  {
    fontSize: "2.986rem",
    fontWeight: 400,
  },
  {
    fontSize: "2.027rem",
    fontWeight: 400,
  }
);

export const H2 = createHeader(
  "h2",
  {
    fontSize: "2.488rem",
    fontWeight: 600,
  },
  {
    fontSize: "1.802rem",
    fontWeight: 600,
  }
);
export const H3 = createHeader(
  "h3",
  {
    fontSize: "2.074rem",
    fontWeight: 500,
  },
  {
    fontSize: "1.602rem",
    fontWeight: 500,
  }
);
export const H4 = createHeader(
  "h4",
  {
    fontSize: "1.728rem",
    fontWeight: 400,
  },
  {
    fontSize: "1.424rem",
    fontWeight: 400,
  }
);

export const H5 = createHeader(
  "h5",
  {
    fontSize: "1.44rem",
    fontWeight: 400,
  },
  {
    fontSize: "1.125rem",
    fontWeight: 400,
  }
);

export const H6 = createHeader(
  "h6",
  {
    fontSize: "1.2rem",
    fontWeight: 500,
  },
  {
    fontSize: "1.125rem",
    fontWeight: 500,
  }
);
