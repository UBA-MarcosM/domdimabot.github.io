import React, { useState } from 'react'
import { Link } from 'react-scroll';
import styles from "./NavBar.module.css"
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export const NavBar = () => {
  const[navBarOpen, setNavBarOpen] = useState(false)
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Services",
    },
    {
      id: 3,
      link: "Benefits",
    },
    {
      id: 4,
      link: "How We Work",
    },
    {
      id: 5,
      link: "Contact",
    },
  ]

  return (
    <div className={navBarOpen === true ? : styles.navBar : styles.navOpen}>
      <p>DomDimaBot</p>
      {!navBarOpen ? (
        <AiOutlineMenu onClick ={() => setNavBarOpen(!navBarOpen)} size={25} />
        ) : (
        <AiOutlineClose onClick ={() => setNavBarOpen(!navBarOpen)} size={25} />
        )}
      {navBarOpen && (
        <ul>
          {links.map((x) => (
            <div>
              <Link>{x.link === "HowWeWork" ? "How we work" : x.link }</Link>
            </div>
          ))}
        </ul>
      )}
    </div>
  )
};

export default NavBar;
