"use client";
import Image from "next/image";
import logo from "../../public/icons/Rectangle.svg";
import PropTypes from 'prop-types';
import { useMediaQuery } from "react-responsive";

function Header({children, onToggleMenu}) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <header className="header">
      <div className="xl:mr-auto">
        <Image
          src={logo}
          className="h-[21px] w-[59px] xl:h-[22px] xl:w-[61px]"
          alt="logo"
        ></Image>
        <span className="font-['Karantina'] text-sm tracking-[.185em]">
          CarpTravel
        </span>
      </div>
      {!isDesktopOrLaptop && (
        <button
          type="button"
          onClick={onToggleMenu}
          className="tracking-[.185em] md:hidden"
        >
          MENU
        </button>
      )}
      {isDesktopOrLaptop && children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  onToggleMenu: PropTypes.func,
};

export default Header;
