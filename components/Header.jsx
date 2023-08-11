import Link from "next/link";

function Header() {
  return (
    <header>
      <Link href="/#about">About</Link>
      <Link href="/#services">Services</Link>
      <Link href="/#career">Career</Link>
      <Link href="/#gallery">Gallery</Link>
      <Link href="/#contacts">Contacts</Link>
    </header>
  );
}

export default Header;
