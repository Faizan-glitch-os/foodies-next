import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "./header.module.css";
import HeaderBackground from "./header-background";
import Navlinks from "../nav-links/nav-links";

export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="logo" priority />
          Next Foodies
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Navlinks href="/meals">Meals</Navlinks>
            </li>
            <li>
              <Navlinks href="/community">Community</Navlinks>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
