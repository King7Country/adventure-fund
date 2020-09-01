import React from "react"


import MobileMenu from "../components/mobile-menu"
import DesktopMenu from "../components/desktop-menu"
import styles from "../components/menu.module.css"

const Menu = () => {


  return (
    <>

      <MobileMenu className={styles.mobile} />

      <DesktopMenu className={styles.desktop} />

    </>
  )
}

export default Menu
