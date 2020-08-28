import React from "react"

import styled from "@emotion/styled"

const Wrapper = styled.ul`
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 2.5rem;
    list-style-image: none;
`

const Testimonial = styled.li `
  display: flex;
  flex-flow: column wrap;
  list-style: none;

`

const Text = styled.h2`
  font-size: 150%;
`

const Name = styled.p `
  align-self: center;
`


const Testimonials = ( {data} ) => (
  <div className="background">
    <Wrapper>

      {data.allContentfulTestimonial.edges.map(edge => {
        return (

          <Testimonial
            key={edge.node.id}>
            <Text>
              {edge.node.testimonial.testimonial}
            </Text>
            <Name>
              {edge.node.clientName}
            </Name>
          </Testimonial>


        )
      })}

    </Wrapper>
  </div>
)

export default Testimonials
