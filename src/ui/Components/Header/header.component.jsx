import "./header.style.css";
import logo from "../../../assets/logo.webp";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function Header({optionSelected}) {
  const [selected, setSelected] = useState(optionSelected);
  const navigate = useNavigate();

  function handleChange(selected){
    setSelected(selected);
    navigate(`/${selected}`);
  };


  return (
    <header className="header_main">
      <img className="header-logo_img" src={logo} alt="imagem da logo" />
      <nav className="header-nav">
        <ul className="header-nav_ul">
          <li>
            <Link
              onClick={() => handleChange("")}
              className={`header-ul_li ${
                selected === "" ? "selected" : null
              }`}
            >
              Início
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
