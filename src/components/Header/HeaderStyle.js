import styled from "styled-components";
import backgroundHeader from "images/background_header.png";
import backgroundMobile from "images/background_mobile.png";
import { colors } from "styled";

import { breakpoints } from "styled";

const HeaderStyle = styled.header`
  background-image: url(${backgroundMobile});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 16px 20px 16px;
  border-bottom-right-radius: 23px;
  border-bottom-left-radius: 23px;

  H2 {
    padding: 82px 0;
  }

  H2 .orange {
    color: ${colors.orange};
  }

  .btn {
    margin-bottom: 20px;
    justify-content: start;
  }

  .btn i {
    margin-right: 60px;
    font-size: 24px;
  }

  @media screen and (min-width: ${breakpoints.md}px) {
    background-image: url(${backgroundHeader});
  }
`;

export default HeaderStyle;
