import React, {useState} from 'react';
import styled from 'styled-components'


const StyledMenuIcon = styled.div`
  margin: 0;
  padding: 1rem;
  width: 2rem;
  position: absolute;
  top: .05rem;
  right: 2rem;

  &:hover {
    cursor: pointer;
  }

  div {
    margin: 0;
    width: 2rem;
    height: .25rem;
    background-color: #FFFFFF;
    transform-origin: 1px;
    transition: all 0.5s linear;
    z-index: ;

    &:nth-child(1) {
      margin-bottom: .25rem;
      transform: ${({open}) => open ? 'rotate(32.5deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      margin-bottom: .25rem;
      transform: ${({open}) =>open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({open}) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-32.5deg)' : 'rotate(0)'};
    }
}
`

const Nav = styled.nav`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0rem;
  right: 0;
  overflow-y: hidden;
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform .5s ease-in-out;
  color: #FFFFFF;
  background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(186, 204, 221, 1));
  z-index: 1;

  ul {
    padding: 5rem 0;
    overflow: hidden;
  }

  li {
    display: flex;
    flex-wrap: nowrap;
  }

  a {

    margin: 0 auto;
    padding: 2rem 5rem;
    min-width: 7.5rem;
    display: block;
    font-size: 1.25rem;
    text-align: center;
    color: #FFFFFF;
    text-decoration: none;
  }
  a:hover {
    background-color: rgba(250, 250, 250, .5);
  }
`

const StyledExitIcon = styled.div`
  padding: 1rem;
  width: 2rem;
  position: absolute;
  top: .5rem;
  right: 2rem;
  z-index: ;

  &:hover {
    cursor: pointer;
  }


  div {
    margin: 0;
    width: 2rem;
    height: .25rem;

    background-color: #FFFFFF;
    transform-origin: 1px;
    transition: all 0.3s linear;
    z-index: ;

    &:nth-child(1) {
      margin-bottom: .25rem;
      transform: ${({open}) => open ? 'rotate(32.5deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      margin-bottom: .25rem;
      transform: ${({open}) =>open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({open}) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-32.5deg)' : 'rotate(0)'};
    }
}
`


const MobileMenu = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledMenuIcon open={open} onClick={() => setOpen(!open)}>
        <div className="burger" />
        <div className="burger" />
        <div className="burger" />
      </StyledMenuIcon>

      <Nav open={open}>
        <StyledExitIcon open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledExitIcon>
        <ul>

          <li><a onClick={() => setOpen(!open)} id="blog" href="/you/">You</a></li>

          <li><a onClick={() => setOpen(!open)} id="blog" href="/about/">& Us</a></li>

          <li><a onClick={() => setOpen(!open)} id="blog" href="/news/">News</a></li>

          <li><a onClick={() => setOpen(!open)} id="blog" href="/contact/">Contact</a></li>

        </ul>
      </Nav>
    </>
);
}

export default MobileMenu;
