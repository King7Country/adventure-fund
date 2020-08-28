import React from 'react'
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from '../components/info.module.css'


const Hero = ( {data} ) => (
<>
  <section className="background">
    <div>
      {data.allContentfulHomePageInfo.edges.map(edge => {
        return (

          <div className={styles.info}
            key={edge.node.id}>

            {edge.node.photo && (

              <Img
                className={styles.photo}
                fluid={edge.node.photo.fluid}
                alt={edge.node.title}
              />
            )}
            <div className={styles.infoChunk}>

              <h2 className={styles.infoTitle}>
                {edge.node.title}
              </h2>
              <p className={styles.infoText}>
                {edge.node.infoText.infoText}
              </p>

              <Link className={styles.infoLink} to={`/${edge.node.linkTo}/`}>{edge.node.linkText}</Link>

            </div>
          </div>
        )
      })}
    </div>

  </section>

</>
)

export default Hero
