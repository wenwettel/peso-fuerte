import styled from "styled-components";
import { colors } from "styled";
const NavbarStyle = styled.div`
  position: fixed;
  left: 0px;
  width: 100%;

  .contain {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
  }
  .menu-open,
  .scroll {
    background-color: ${colors.black};
    padding: 20px 20px;
  }

  .fas {
    color: ${colors.white};
    font-size: 18px;
  }
  .menu {
    list-style: none;
    height: 100%;
    position: fixed;
    top: -100%;
    background-color: hsla(0, 5%, 3%, 0.4);

    transition: all 0.5s ease-in-out;
    width: 100%;
    left: 0;
  }

  .menu.active {
    top: 0;
  }

  ul {
    background-color: ${colors.white};
  }
  li {
    list-style: none;
    padding: 20px 25px;
    border-bottom: 1px solid ${colors.grey20};
  }
`;

export default NavbarStyle;
