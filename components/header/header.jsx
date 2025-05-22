import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "./header.module.css";
import HeaderBackground from "./header-background";

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
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
