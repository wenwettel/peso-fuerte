import styled from "styled-components";
import { breakpoints } from "styled";
import TextImageStyle from "../TextImage/TextImageStyle";

const BenefitsStyle = styled.div`
  padding: 15px;

  @media screen and (min-width: ${breakpoints.md}px) {
    H1,
    .subtitle {
      text-align: center;
    }
    ${TextImageStyle} {
      width: 550px;
    }
  }

  @media screen and (min-width: ${breakpoints.lg}px) {
    width: 848px;
    margin: 0 auto;

    ${TextImageStyle} {
      width: 600px;
    }
  }
`;

export default BenefitsStyle;
