import React from "react"
import { Link } from "gatsby"
import './header.css'
import Menu from "./menu.js"
import Logo from "../images/logo.svg"

class Header extends React.Component {

/*****
    constructor(props) {
      super(props)

      this.state = {
        hasScrolled: true
      }
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = (event) => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 50) {
        this.setState({ hasScrolled: false })
      } else {
        this.setState({ hasScrolled: true })
      }
    }
*****/




  render() {

    return (
      <>


        <header id="header" className="head">

          <Link className="logo" to="/">

            <Logo />

          </Link>

          <Menu />

        </header>


      </>
    )
  }
}


export default Header



/*
class Header extends React.Component {

  const headerView = () => {
    let location = useLocation();
    console.log(location.pathname);


      return (
        <>

          <div className={this.state.hasScrolled ? 'head' : 'scrolled head'}>

            <span>Path : {location.pathname}</span>
            }

            <Link className="logo" to="/">
              <img src={require('../images/king-country-logo-white.svg')} alt="Logo" width="200"/>
            </Link>

            <Menu />

          </div>

        </>
      )

}


export default Header
*/
