import React from "react"
import { useViewport } from "../hooks"

import MobileMenu from "../components/mobile-menu"
import DesktopMenu from "../components/desktop-menu"


const Menu = () => {

  // const [width, setWidth] = React.useState(window.innerWidth);
  // const breakpoint = 620;
  //
  // React.useEffect(() => {
  //   const handleWindowResize = () => setWidth(window.innerWidth)
  //   window.addEventListener("resize", handleWindowResize);
  //
  //   // Return a function from the effect that removes the event listener
  //   return () => window.removeEventListener("resize", handleWindowResize);
  // }, []);

  const { width } = useViewport();
  const breakpoint = 800;

  return width < breakpoint ? <MobileMenu /> : <DesktopMenu />;

}

export default Menu
