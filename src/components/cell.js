import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: center;
    grid-gap: 1rem;
    align-items: center;
    max-width: 600px;
`

const CellImage = styled.div`

    width: 150px;
    height: 100px;
    background-image: url(${props => props.image});
    background-size: 50px;
`

const CellTitle = styled.div`
    margin: 0 auto;
    font-size: 1.5rem;
    padding: .5rem;
`
const CellText = styled.div`
      margin: 0 auto;
    font-size: 18px;
    padding: .5rem;
`

const Cell = props => (
    <CellGroup>
      <CellImage image={props.image}></CellImage>
      <div>
        <CellTitle>{props.title}</CellTitle>
        <CellText>{props.text}</CellText>
      </div>
    </CellGroup>
)

export default Cell
