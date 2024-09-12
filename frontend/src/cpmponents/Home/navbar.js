import "../../css/navbar.css";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { TokenContext } from "../../context/context";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const {token, setToken} = useContext(TokenContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const toggleMenu = () => {
    console.log("Toggle menu clicked");
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to={token ? "/home" : "/"} className="nav__logo">
          Weather
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
           {token && (
            <>
            <li className="nav__item">
              <NavLink
                to={"/home"}
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to={"/weather"}
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Weather
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to={"/about"}
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav__item">
                <NavLink
                  to="/"
                  className="nav__link nav__cta"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </li>
            </>
           )}
            {!token && (
              <>
              <li className="nav__item">
                <NavLink to="/" className="nav__link nav__cta">
                  Login
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/register" className="nav__link nav__cta">
                  Register
                </NavLink>
              </li>
              </>
            )}
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
