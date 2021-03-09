import { useState, useEffect, useRef } from "react";
import logoPF from "images/logopf2.png";
import NavbarStyle from "./NavbarStyle";

const Navbar = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const barElement = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.pageYOffset;
      const bar = barElement.current;
      if (!bar) return;
      scrollPos ? bar.classList.add("scroll") : bar.classList.remove("scroll");
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hideMenu = () => {
    setisOpenMenu(!isOpenMenu);
  };

  return (
    <NavbarStyle>
      <div ref={barElement} className="contain ">
        <div>
          <img src={logoPF} alt="peso-fuerte" />
        </div>
        <i className="fas fa-bars" onClick={hideMenu}></i>
      </div>
      <nav className={`menu ${isOpenMenu ? "active" : ""}`}>
        <div className="contain menu-open">
          <div>
            <img src={logoPF} alt="peso-fuerte" />
          </div>
          <i className="fas fa-times" onClick={hideMenu}></i>
        </div>
        <ul>
          <li>
            <a onClick={hideMenu}>Cómo funciona</a>
          </li>
          <li>
            <a onClick={hideMenu}>Preguntas frecuentes</a>
          </li>
          <li>
            <a onClick={hideMenu}>Crear cuenta</a>
          </li>
          <li>
            <a onClick={hideMenu}>Iniciar sesión</a>
          </li>
        </ul>
      </nav>
    </NavbarStyle>
  );
};

export default Navbar;
