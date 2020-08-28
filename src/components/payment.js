import React from "react"
import StripeCheckout from 'react-stripe-checkout'
import styled from "@emotion/styled"
import Wrapper from "../components/wrapper"


const StyledButton = styled.button `
margin: 0 auto 5rem auto;
transform: translateX(50%);
display: block;
background-color: aliceblue;
`
const handlePurchase = (token) => {
  const amount = 5000
  const description = "The adventure of a lifetime"

  const bodyObect = {
    tokenId: token.id,
    email: token.email,
    name: token.name,
    description,
    amount
  }

  fetch('http://localhost:9000/stripe-charge', {
    method: 'POST',
    body: JSON.stringify(bodyObect)
  })
}



const Payment = () => (

  <>
    <Wrapper>

      <StripeCheckout
        amount={5000}
        token={handlePurchase}
        stripeKey={'pk_test_51HJjndGLgjtYhs2WXpr9FQsn9obTNdF1UW1EdY7B8lNL9zpaXvEZaO5A3ofXejEqxOnwvvjkisiBKkCy8jJebQyY00CylGTeTC'}
      >
        <StyledButton
        to="/buy">
          Payment
        </StyledButton>
      </StripeCheckout>

    </Wrapper>
  </>

)

export default Payment
