import React, { Component } from "react"
import { Link } from "gatsby"
import Logo from "../../images/logo.png"
import { FaCartArrowDown, FaMinusSquare } from "react-icons/fa"

export default class Navbar extends Component {
  state = {
    navbarState: false,
    navbarClass: "collapse navbar-collapse",
    menus: [
      {
        id: 1,
        text: "Home",
        url: "/",
      },
      {
        id: 2,
        text: "About",
        url: "/about",
      },
      {
        id: 3,
        text: "Services",
        url: "/services",
      },
      {
        id: 4,
        text: "Contact",
        url: "/contact",
      },
    ],
  }

  myToggler = () => {
    this.state.navbarState
      ? this.setState({
          navbarState: false,
          navbarClass: "collapse navbar-collapse",
        })
      : this.setState({
          navbarState: true,
          navbarClass: "collapse navbar-collapse show",
        })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-theme text-white">
        <Link to="/" clasName="navbar-brand ml-4">
          <img src={Logo} alt="Logo here" width="40px" />
        </Link>
        <li className="nav-brand">
          <Link to="/" className="navbar-brand text-white capitalize">
            BUYNLEARN
          </Link>
        </li>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          onClick={this.myToggler}
        >
          <span className="text-white">menu</span>
        </button>
        <div className={this.state.navbarClass}>
          <ul className="navbar-nav ml-auto mr-5">
            {this.state.menus.map(menu => {
              return (
                <li key={menu.id} className="nav-item">
                  <Link
                    to={menu.url}
                    className="nav-link text-white capitalize"
                  >
                    {menu.text}
                  </Link>
                </li>
              )
            })}
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                <FaCartArrowDown className="cart-icon"></FaCartArrowDown>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
