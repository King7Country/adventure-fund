import React from "react"
import styles from "../components/wrapper.module.css"


export default ( {children} ) => (
  <div className={styles.wrapper}>
    {children}
  </div>
)
