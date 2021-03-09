import HeaderStyle from "./HeaderStyle";
import { H2, colors, Button } from "styled";
import ilustracion from "images/ilustracion-header.png";
// eslint-disable-next-line no-unused-vars
import styled from "styled-components/macro";
import Navbar from "components/Navbar";

function Header() {
  return (
    <HeaderStyle>
      <Navbar />
      <H2 color={colors.white}>
        La billetera digital <br></br>donde tu plata
        <span className="orange"> rinde más</span>
      </H2>
      <img src={ilustracion} alt="ilustracion" />
      <Button
        className="btn"
        bgColor={colors.blueFacebook}
        bgActive={colors.blue}
        fullsize
      >
        <i className="fab fa-facebook-f"></i>
        Ingresar con Facebook
      </Button>
      <Button className="btn" bgColor={colors.black80} fullsize>
        <i className="fas fa-envelope"></i>
        Ingresar con Email
      </Button>
    </HeaderStyle>
  );
}

export default Header;
