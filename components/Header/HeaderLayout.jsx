"use client";
import Header from "./Header";
import MobileMenu from "../MobileMenu/MobileMenu";
import Navigation from "../MobileMenu/Navigation";
import { useState } from "react";

export default function HeaderLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {isMenuOpen && (
        <MobileMenu onToggleMenu={handleToggleMenu}>
          <Navigation onToggleMenu={handleToggleMenu} />
        </MobileMenu>
      )}
      <Header onToggleMenu={handleToggleMenu}>
        <Navigation onToggleMenu={handleToggleMenu} />
      </Header>
    </div>
  );
}
