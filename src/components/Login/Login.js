import React from "react";
import LoginStyle from "./LoginStyle";
import { P1, P2, colors } from "styled";

function Login() {
  return (
    <LoginStyle>
      <P1>Iniciá sesión para continuar:</P1>
      <input type="email" placeholder="Correo Electronico"></input>
      <input type="password" placeholder="Contraseña"></input>
      <P2 color={colors.orange}>Olvidé la contraseña</P2>
    </LoginStyle>
  );
}

export default Login;
