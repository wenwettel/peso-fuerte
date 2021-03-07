import styled from "styled-components";
import { colors } from "styled";

const StyledButton = styled.button`
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  border-radius: 22px;
  align-items: center;
  padding: 0 20px;
  height: ${(props) => (props.fullsize ? "48px" : "40px")};
  width: ${(props) => (props.fullsize ? "100%" : undefined)};
  color: ${(props) => props.color || colors.white};
  background-color: ${(props) => props.bgColor || colors.orange};

  &:active {
    background-color: ${(props) => props.bgActive || colors.orange80};
  }

  &::disabled {
  }
`;

export const Button = ({
  className,
  children,
  fullsize,
  color,
  bgColor,
  bgActive,
}) => {
  return (
    <StyledButton
      fullsize={fullsize}
      color={color}
      bgColor={bgColor}
      className={className}
      bgActive={bgActive}
    >
      {children}
    </StyledButton>
  );
};

export const SecondaryButton = ({ fullsize, className, children }) => (
  <StyledButton
    fullsize={fullsize}
    color={colors.orange}
    bgColor="transparent"
    className={className}
    bgActive={colors.orange20}
  >
    {children}
  </StyledButton>
);
