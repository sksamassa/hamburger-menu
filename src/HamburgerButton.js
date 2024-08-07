import "./HamburgerButton.css";
import { useState } from "react";

function HamburgerBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <button
        id="menu-btn"
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleButton}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>

      {/* Menu */}
      <nav className={`hidden ${isOpen && "menu"}`}>
        <a
          href="#"
          className="hover:text-gray-700 hover:border-b hover:border-b-gray-700 transition duration-150"
        >
          About
        </a>
        <a
          href="#"
          className="hover:text-gray-700 hover:border-b hover:border-b-gray-700 transition duration-150"
        >
          Contact
        </a>
        <a
          href="#"
          className="hover:text-gray-700 hover:border-b hover:border-b-gray-700 transition duration-150"
        >
          Licence
        </a>
      </nav>
    </div>
  );
}

export default HamburgerBtn;
