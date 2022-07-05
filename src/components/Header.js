import React from "react";
import logo from "../images/megahombre-logo.png";

function Header() {
   return (
      <header className="header">
         <img className="header__logo" src={logo} alt="Megaman" width="200" />
         <h1 className="header__title text-shadow">Memory Card Game</h1>
         <p className="header__score text-shadow">Score: 0 High Score: 0</p>
      </header>
   );
}

export default Header;
