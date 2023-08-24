// import "./navbar.scss";
import icon from "../../assets/pear.png";
import menuIcon from "../../assets/menu-icon.svg";
import closeMenuIcon from "../../assets/close-menu-icon.svg";
import { useRef } from "react";

export default function Navbar() {
  const menuRef = useRef(null);

  // const toggleMenu = () => {
  //   menuRef.current.classList.toggle("menu");
  // };
  const toggleMenu = (open) => {
    if (open) {
      menuRef.current.classList.remove("hidden");
      menuRef.current.classList.add("flex");
    } else {
      menuRef.current.classList.add("hidden");
      menuRef.current.classList.remove("flex");
    }
  };

  return (
    <header className="absolute z-10 w-full py-6 font-poppins padding-x">
      <nav className="flex items-center justify-between gap-10 max-container">
        <div className="relative flex items-center flex-1">
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
        <div
          ref={menuRef}
          className="absolute top-0 right-0 z-20 flex-col items-center hidden h-screen gap-8 py-8 text-center rounded-md shadow-xl bg-primary w-max padding-x text-whitee "
        >
          <img
            src={closeMenuIcon}
            alt="close menu"
            width={32}
            height={32}
            className="absolute self-end cursor-pointer right-4 top-4"
            onClick={() => toggleMenu(false)}
          />
          <ul className="flex flex-col gap-8 w-[220px] mt-10 mNavLink">
            <li>Products</li>
            <li>Services</li>
            <li>Services</li>
            <li>Contacts</li>
          </ul>
          <a
            href="#"
            className="w-full py-2 btn bg-secondary hover:opacity-80 active:bg-slate-gray"
          >
            Sign In
          </a>
        </div>
        <ul className="flex items-center justify-between flex-[1.5] gap-6 text-[16px] font-normal text-[#999] navLink max-md:hidden">
          <li>Products</li>
          <li>Services</li>
          <li>Services</li>
          <li>Contacts</li>
        </ul>
        <div className="flex justify-end flex-1 max-md:hidden">
          <a href="#" className="btn hover:bg-transparent hover:text-primary">
            Sign In
          </a>
        </div>
        <img
          src={menuIcon}
          alt="menu"
          width={32}
          height={32}
          className="hidden cursor-pointer max-md:block"
          onClick={() => toggleMenu(true)}
        />
      </nav>
    </header>
  );
}
