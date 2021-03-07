import FooterStyle from "./FooterStyle";
import { P1, P2, colors } from "styled";
import logo from "images/logo.png";
function Footer() {
  return (
    <FooterStyle>
      <P1 color={colors.white}>Footer</P1>
      <P1 color={colors.white}>Datos de contacto</P1>
      <P1 color={colors.white}>Redes Sociales</P1>
      <div className="dev">
        <P2 color={colors.white}>Desarrollado por</P2>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;
