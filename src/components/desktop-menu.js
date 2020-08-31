import React from 'react';
import styled from 'styled-components'
import { Link }from "gatsby"




const Nav = styled.nav`
  margin-right: 5%;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0rem;
  right: 0rem;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  color: #FFFFFF;
  z-index: 1;


    a {
      margin: .5rem .25rem;
      padding: .5rem 1rem;
      display: block;
      font-size: 100%;
      text-align: center;
      color: #FFFFFF;
      text-decoration: none;
    }
    a:hover {
      cursor: pointer;
    }
`

const DesktopMenu = () => {

  return (
    <>

      <Nav>

        <Link className="link" to="/you/">You</Link>

        <Link className="link" to="/about/">& Us</Link>

        <Link className="link" to="/news/">News</Link>

        <Link className="link" to="/contact/">Contact</Link>

      </Nav>

    </>
);
}

export default DesktopMenu;
