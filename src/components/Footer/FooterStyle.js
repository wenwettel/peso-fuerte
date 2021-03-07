import styled from "styled-components";
import { colors, breakpoints } from "styled";

const FooterStyle = styled.div`
  background-color: ${colors.black90};
  color: ${colors.white};
  padding: 20px 0 5px 0;

  text-align: center;

  .dev {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 0.5px solid #808fa4;
    padding-top: 5px;
    margin-top: 20px;
  }
  img {
    margin-left: 5px;
  }

  @media screen and (min-width: ${breakpoints.lg}px) {
    .dev {
      justify-content: flex-end;
      padding-right: 30px;
    }
  }
`;

export default FooterStyle;
