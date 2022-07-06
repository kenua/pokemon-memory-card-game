import React from "react";
import logo from "../images/megahombre-logo.png";

function Header(props) {
   return (
      <header className="header">
         <img className="header__logo" src={logo} alt="Megaman" width="200" />
         <h1 className="header__title text-shadow">Memory Card Game</h1>
         <p className="header__score text-shadow">
            Score: {props.score} High Score: {props.highScore}
         </p>
      </header>
   );
}

export default Header;
