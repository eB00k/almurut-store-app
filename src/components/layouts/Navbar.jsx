import "./navbar.scss";
import icon from "../../assets/pear.png";
import { useRef } from "react";

export default function Navbar() {
  const menuRef = useRef(null);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("menu");
  };

  return (
    <div className="navbar">
      <div className="navbar__icon">
        <img src={icon} alt="pear" style={{ width: "30px", height: "30px" }} />
        <span className="icon__text">almurut</span>
      </div>
      <div className="toggle__menu" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <nav ref={menuRef}>
        <ul className="navbar__list">
          <li>Products</li>
          <li>Services</li>
          <li>Services</li>
          <li>Contacts</li>
        </ul>
        <div className="navbar__login btn">Sign In</div>
      </nav>
    </div>
  );
}
