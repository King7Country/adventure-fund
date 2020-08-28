import React from 'react'
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from '../components/hero.module.css'

const Hero = ( {data} ) => (

  <section>

    {data.allContentfulHeroBanner.edges.map(edge => {

      return (

        <div className={styles.heroWrapper}
          key={edge.node.id}>

          {edge.node.heroImage && (
            <Img
              className={styles.heroImage}
              fluid={edge.node.heroImage.fluid}
              alt={edge.node.title}
            />
          )}
          <div className={styles.heroMessage}>

            <h2 className={styles.heroText}>
              {edge.node.heroText.heroText}
            </h2>
            <Link className={styles.heroLink} to="/about/">Learn More</Link>
          </div>
        </div>

      )
    })}
  </section>
)

export default Hero



      // {data.allContentfulHeroBanner.edges.map(edge => {
      //   return (
      //     <div className={styles.heroWrapper}
      //       key={edge.node.id}>
      //
      //       {edge.node.heroImage && (
      //         <Img
      //           className={styles.heroImage}
      //           fluid={edge.node.heroImage.fluid}
      //           alt={edge.node.title}
      //         />
      //       )}
      //       <div className={styles.heroMessage}>
      //
      //         <h2 className={styles.heroText}>
      //           {edge.node.heroText.heroText}
      //         </h2>
      //         <Link className={styles.heroLink} to="/about/">Learn More</Link>
      //       </div>
      //     </div>
      //   )
      // })}
