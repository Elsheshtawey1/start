import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header mx-auto pt-2 px-25 flex justify-between items-center max-[700px]:items-center max-[700px]:text-center max-[700px]:px-4  ">
      <button className="burger md:hidden absolute right-4 text-3xl text-[var(--secondary2-color)] transition  " onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX className="text-[var(--secondary-color)] transition duration-700" /> : <FiMenu />}
      </button>
      <div className="logo flex items-center gap-4">
        <img className="w-13 font-medium " src="/logo.webp" alt="logo" />
        <h1 className="text-4xl text-[var(--secondary2-color)]">Logo</h1>
      </div>
      <nav className={`max-[700px]:bg-[var(--main-color)] max[700px]:shadow-sm  absolute top-16 left-0 w-full md:static md:w-auto md:flex md:items-center md:gap-8 px-6 py-4 md:p-0 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex gap-4 flex-col md:flex-row  md:gap-8 text-lg font-medium">
          <li className="text-xl font-normal text-[var(--secondary2-color)] hover:text-[var(--secondary-color)] transition">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xl font-normal text-[var(--secondary2-color)] hover:text-[var(--secondary-color)] transition">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="text-xl font-normal text-[var(--secondary2-color)] hover:text-[var(--secondary-color)] transition">
            <Link to="/services">Services</Link>
          </li>
          <li className="text-xl font-normal text-[var(--secondary2-color)] hover:text-[var(--secondary-color)] transition">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
