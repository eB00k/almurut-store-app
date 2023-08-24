// import "./navbar.scss";
import icon from "../../assets/pear.png";
import { useRef } from "react";

export default function Navbar() {
  // const menuRef = useRef(null);

  // const toggleMenu = () => {
  //   menuRef.current.classList.toggle("menu");
  // };

  return (
    <header className="absolute z-10 w-full py-6 font-poppins padding-x">
      <nav className="flex items-center justify-between gap-10 max-container">
        <div className="flex items-center flex-1">
          <img
            src={icon}
            alt="pear"
            width={32}
            height={32}
            className="transition cursor-pointer hover:rotate-12 hover:drop-shadow-3xl"
          />
          <span className="text-xl font-semibold cursor-pointer text">
            almurut
          </span>
        </div>
        <ul className="flex items-center justify-between flex-[1.5] gap-6 text-[16px] font-normal text-[#999] navLink max-md:hidden">
          <li>Products</li>
          <li>Services</li>
          <li>Services</li>
          <li>Contacts</li>
        </ul>
        <div className="flex justify-end flex-1 ">
          <a href="#" className="btn hover:bg-transparent hover:text-primary">
            Sign In
          </a>
        </div>
      </nav>
    </header>
  );
}
