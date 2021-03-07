import styled from "styled-components";
import { colors } from "styled";

const SmallCardStyle = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.grey20};
  height: 64px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 3px 6px 0px rgba(26, 27, 29, 0.26);

  img {
    margin: 0 15px;
  }
`;

export default SmallCardStyle;
