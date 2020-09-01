import React from "react"
import { Link } from "gatsby"

import "./layout.css"
import styles from "./footer.module.css"

const Footer = () => {



  return (
    <>

      <footer>

        <div className={styles.copyright}>
          © {new Date().getFullYear()}, Created and designed by
          {` `}
          <a href="https://www.kingcountry.ca">King Country</a>
        </div>

        <ul className={styles.footerList}>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        </footer>

    </>
  )
}


export default Footer
