import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./index.module.css"
import styled from "./about.module.css"
import Wrapper from "../components/wrapper.js"
import Layout from "../components/layout"
import SEO from "../components/seo"


const AboutPage = ( {location} ) => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulHeroBanner {
          edges {
            node {
              title
              id
              slug
              heroImage {
                fluid(
                  maxWidth: 2000,
                  resizingBehavior: SCALE,
                   toFormat: JPG
                ) {
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  )




  return (
    <>
      <Layout>
        <SEO title="About" />


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

              </div>
              <h2 className={styled.title}>
                {edge.node.title}
              </h2>
            </div>
          )
        })}


        <div className={styled.content}>
          <p>
            I'm baby meditation pinterest intelligentsia gochujang gluten-free
            cred sustainable etsy seitan sriracha.  Woke brooklyn gluten-free banh
            mi.  Pinterest green juice echo park, hell of vegan cardigan celiac pork
            belly vape farm-to-table roof party.  Put a bird on it normcore
            flexitarian vice forage ennui gastropub offal chillwave.  Fingerstache
            snackwave paleo, polaroid post-ironic offal pug venmo.  Drinking vinegar
            skateboard af poutine, messenger bag cred hoodie yuccie prism +1
            crucifix typewriter gentrify keffiyeh artisan.
          </p>

          <br></br>

          <blockquote>Actually tote bag 90's master cleanse, bicycle rights locavore tilde vice.  Microdosing pickled  vinyl. </blockquote>

          <p>Retro twee copper
            mug chia leggings lomo banjo master cleanse meditation thundercats.  Drinking vinegar copper mug meh occupy.  Bushwick sriracha gochujangennui deep v.  Gochujang drinking vinegar adaptogen authentic, directtrade four dollar toast asymmetrical wayfarers intelligentsia retro pokpok knausgaard celiac kale chips mixtape.  Typewriter normcore cronut  readymade post-ironic craft beer, synth kale chips 3 wolf moon unicorn.  Selfies snackwave umami vice, you probably haven't heard of themreadymade tbh typewriter salvia pabst bespoke polaroid.
          </p>


          <ul className={styled.featureList}>
            <li><strong>Woke disrupt authentic</strong></li>
            <li><strong>Cold-pressed aesthetic</strong></li>
            <li><strong>Raw denim activated</strong></li>
          </ul>

          <p>
            Coloring book ugh succulents, trust fund flannel DIY knausgaard portland intelligentsia YOLO forage tousled vinyl echo park wayfarers. Actually blog chillwave, af quinoa direct trade tote bag brunch. Normcore poutine dreamcatcher synth fashion axe umami kogi snackwave distillery everyday carry.  Marfa banjo irony flexitarian celiac vaporware plaid edison bulb.  Helvetica VHS literally beard, ramps enamel pin man braid ethical mumblecore thundercats hashtag fashion axe.  Twee tote bag lomo hella mustache meditation fixie.  Art party hoodie waistcoat biodiesel lomo bicycle rights,
            distillery kombucha tote bag banjo etsy.
          </p>

          <br></br>
        </div>



      </Layout>
    </>
  )
}

export default AboutPage
