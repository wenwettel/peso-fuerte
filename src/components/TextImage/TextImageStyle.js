import styled from "styled-components";
import { colors, breakpoints } from "styled";

const TextImageStyle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;

  margin: ${(props) => (props.reversed ? "0 0 0 auto" : "0 auto 0 0")};

  p {
    font-weight: 500;
    color: ${colors.black80};
    margin: ${(props) => (props.reversed ? "0 15px 0 0" : "0 0 0 15px")};
  }

  @media screen and (min-width: ${breakpoints.md}px) {
    p {
      font-size: 20px;
      color: black;
      font-weight: 400;
    }
  }
`;

export default TextImageStyle;
