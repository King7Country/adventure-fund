import React from "react"
import { useViewport } from "../hooks"

import MobileMenu from "../components/mobile-menu"
import DesktopMenu from "../components/desktop-menu"


const Menu = () => {

  const { width } = useViewport();

  const breakpoint = 800;

  return (
    // <MobileMenu />


   width < breakpoint ? <MobileMenu /> : <DesktopMenu />

  );
}

export default Menu
