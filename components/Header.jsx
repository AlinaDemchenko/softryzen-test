import Link from "next/link";
import Image from "next/image";
import logo from "../public/Rectangle.svg";

function Header() {
  return (
    <header className="absolute top-0 left-1/2 transform -translate-x-1/2 flex w-[1232px] justify-between pt-6">
      <div>
        <Image src={logo} width={61} height={22} alt="logo"></Image>
        <span className="font-['Karantina'] text-sm tracking-widest">
          CarpTravel
        </span>
      </div>
      <nav>
        <ul className="mt-[11px] text-sm tracking-wider">
          <li className="nav-link">
            <Link href="/#about">About</Link>
          </li>
          <li className="nav-link">
            <Link href="/#services">Services</Link>
          </li>
          <li className="nav-link">
            <Link href="/#career">Career</Link>
          </li>
          <li className="nav-link">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="inline-block">
            <Link href="/#contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
