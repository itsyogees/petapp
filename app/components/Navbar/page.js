'use client';

import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaRegHeart,
  FaRegUserCircle,
  FaRegBell,
} from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add `active` class based on the current route
  const getLinkClass = (href) => {
    return pathname === href ? "active" : "";
  };

  return (
    <div className="navbarMain">
      <div className="navbarContainer">
        <nav className="navbar">
          {/* Logo Section */}
          <div className="navIcons">
            <div className="logo">
              <Link href="/">
                <img src="/image/logo.png" alt="Logo" />
              </Link>
            </div>

            {/* Hamburger Menu Toggle */}
            <div className="menuToggle" onClick={toggleMenu}>
              {!isMenuOpen ? (
                <FaBars className="icon" />
              ) : (
                <FaTimes className="icon" />
              )}
            </div>

            {/* Navigation Items */}
            <ul className={`navItems ${isMenuOpen ? "active" : ""}`}>
              <li>
                <Link href="/" className={getLinkClass("/")} onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pages/Pets" className={getLinkClass("/pages/Pets")} onClick={toggleMenu}>
                  Pets
                </Link>
              </li>
              <li>
                <Link href="/pages/Products" className={getLinkClass("/pages/Products")} onClick={toggleMenu}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/pages/Shop" className={getLinkClass("/pages/Shop")} onClick={toggleMenu}>
                  Shops
                </Link>
              </li>
              <li>
                <Link href="/pages/Blog" className={getLinkClass("/pages/Blog")} onClick={toggleMenu}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Side Icons */}
          <div className="rightMenu">
            <Link href="/pages/Notification" className="iconLink">
              <FaRegBell className="icon" />
            </Link>
            <Link href="/pages/CardPage" className="iconLink">
              <FaRegHeart className="icon" />
            </Link>
            <Link href="/pages/CartPage" className="iconLink">
              <FiShoppingCart className="icon" />
            </Link>
            <Link href="/pages/Profile" className="iconLink">
            <span className="helloText">Hello, Sign In</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
