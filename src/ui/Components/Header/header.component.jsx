import "./header.style.css";
import logo from "../../../assets/logo.webp";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Header({ handleChangeContent }) {
  const [selected, setSelected] = useState("Home");
  return (
    <header className="header_main">
      <img className="header-logo_img" src={logo} alt="imagem da logo" />
      <nav className="header-nav">
        <ul className="header-nav_ul">
          <li>
            <Link
              onClick={() => handleChangeContent("Home", setSelected)}
              className={`header-ul_li ${
                selected === "Home" ? "selected" : null
              }`}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleChangeContent("FindTeam", setSelected)}
              className={`header-ul_li ${
                selected === "FindTeam" ? "selected" : null
              }`}
            >
              Pesquisar time
            </Link>
          </li>
          <li>
            <Link
            onClick={() => handleChangeContent("FindPlayer", setSelected)}
              className={`header-ul_li ${
                selected === "FindPlayer" ? "selected" : null
              }`}
            >
              Pesquisar jogador
            </Link>
          </li>
          <li>
            <Link
            onClick={() => handleChangeContent("Matchweek", setSelected)}
              className={`header-ul_li ${
                selected === "Matchweek" ? "selected" : null
              }`}
            >
              Rodadas
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
