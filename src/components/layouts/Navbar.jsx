import "./navbar.scss";
import icon from "../../assets/pear.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__icon">
        <img src={icon} alt="pear" style={{ width: "30px", height: "30px" }} />
        <span className="icon__text">almurut</span>
      </div>
      <nav>
        <ul className="navbar__list">
          <li>Products</li>
          <li>Services</li>
          <li>Contacts</li>
        </ul>
      </nav>
      <div className="navbar__login btn">Sign In</div>
    </div>
  );
}
