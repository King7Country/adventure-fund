import React from "react"
import PropTypes from "prop-types"
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        
        </footer>

    </>
  )
}


export default Footer
