import styled from "styled-components";
import { colors, breakpoints } from "styled";

const FrequentQuestionsStyle = styled.div`
  background-color: ${colors.grey10};
  padding: 50px 0;
  width: 100%;

  H3 {
    margin-bottom: 15px;
  }

  .container {
    margin: 0 16px;
  }

  .container-card {
    display: grid;
    margin-top: 20px;
    row-gap: 20px;
  }

  @media screen and (min-width: ${breakpoints.md}px) {
    .container-card {
      grid-template-columns: 1fr 1fr;
      column-gap: 30px;
    }
  }

  @media screen and (min-width: ${breakpoints.lg}px) {
    .container {
      width: 848px;
      margin: 0 auto;
    }
  }
`;

export default FrequentQuestionsStyle;
