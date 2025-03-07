import React from "react";

function NavBar() {
  return (
    <header className="header mx-auto px-20 mt-5 flex justify-between items-center">
      <div className="logo">
        <img src="/public/logo.webp" alt="" />
        <h1>Logo</h1>
      </div>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/">
            <li>Portfolio</li>
          </Link>
          <Link to="/">
            <li>Services</li>
          </Link>
          <Link to="/">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
