import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styles from "./header.module.scss"
import { withPrefix } from "gatsby"
import { Location } from '@reach/router'
import logo from '../images/logo.svg'
import phone from '../images/phone-green.svg'
import Helmet from 'react-helmet'

class Header extends Component {

  state = {
    scrolled: false,
    showMenu: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
    
  handleScroll = (event) => {
    console.log(window.scrollY);
    if(window.scrollY >=100) {
      this.setState({scrolled: true})
    } else {
      this.setState({scrolled: false})
    }
  }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
  render() {
    const navActive = this.state.showMenu ? `${styles.nav} ${styles.active}` : `${styles.nav}`;
    const menuActive = this.state.showMenu ?  `${styles.menu} ${styles.visibleMenu}` : `${styles.menu}`;
    const burgerActive = this.state.showMenu ?  `${styles.burger} ${styles.open}` : `${styles.burger}`;
    let visibleLogo;
    
    
  return (



<nav className={navActive}>
<Helmet
    bodyAttributes={{
        class: this.state.showMenu ?  `${styles.preload}` : ``
    }}
/>
  <div className={styles.nav__inner}>
  <div className={styles.nav__container}>
    <div className={styles.nav__logo}>
    <Location>
      {({ location }) => {
        console.log(location)
        return (
      <a href="index.html"  className={(this.state.scrolled && location.pathname === '/') || location.pathname !== '/'?  `${styles.nav__logoLink} ${styles.show}` : styles.nav__logoLink}>
        <img className={styles.nav__logoImg} src={logo} alt="Świecki - Kancelaria Adwokacka"/>
      </a>
       )
      }}
    </Location>
    </div>
      <div className={styles.nav__phone}>
        <a className={styles.nav__phoneIcon} href="tel:+48 42 208 81 80"><img src={phone} alt=""/></a>
      </div>
      
    <button aria-label="open menu" className={burgerActive} onClick={this.toggleMenu}>
        <span className={styles.burger__span}></span>
        <span className={styles.burger__span}></span>
        <span className={styles.burger__span}></span>
        <span className={styles.burger__span}></span>
    </button>
    <ul className={menuActive}>
    <Location>
      {({ location }) => {
        console.log(location)
        return (
          <li className={location.pathname ==='/' ? `${styles.menu__item} ${styles.active}` : styles.menu__item}>
          <Link
          to="/" className={styles.menu__link} activeClassName={styles.active}
        >
          Home
        </Link>
        </li>
      )
      }}
    </Location>
    <Location>
      {({ location }) => {
        console.log(location)
        return (
          <li className={location.pathname ==='/about/' ? `${styles.menu__item} ${styles.active}` : styles.menu__item}>
          <Link
          to="/about/" className={styles.menu__link} activeClassName={styles.active}
        >
          Kancelaria
        </Link>
        </li>
      )
      }}
    </Location>
    <Location>
      {({ location }) => {
        console.log(location)
        return (
          <li className={location.pathname ==='/team/' ? `${styles.menu__item} ${styles.active}` : styles.menu__item}>
          <Link
          to="/about/" className={styles.menu__link} activeClassName={styles.active}
        >
          Zespół
        </Link>
        </li>
      )
      }}
    </Location>
    <Location>
      {({ location }) => {
        console.log(location)
        return (
          <li className={location.pathname ==='/specialization/' ? `${styles.menu__item} ${styles.active}` : styles.menu__item}>
          <Link
          to="/about/" className={styles.menu__link} activeClassName={styles.active}
        >
          Specjalizacja
        </Link>
        </li>
      )
      }}
    </Location>
    <Location>
      {({ location }) => {
        console.log(location)
        return (
          <li className={location.pathname ==='/clients/' ? `${styles.menu__item} ${styles.active}` : styles.menu__item}>
          <Link
          to="/about/" className={styles.menu__link} activeClassName={styles.active}
        >
          Zaufali nam
        </Link>
        </li>
      )
      }}
    </Location>
    <Location>
      {({ location }) => {
        console.log(location)
        return (
          <li className={location.pathname ==='/contact/' ? `${styles.menu__item} ${styles.active}` : styles.menu__item}>
          <Link
          to="/about/" className={styles.menu__link} activeClassName={styles.active}
        >
          Kontakt
        </Link>
        </li>
      )
      }}
    </Location>
    <Location>
      {({ location }) => {
        console.log(location)
        return (
          <li className={location.pathname ==='/contact/' ? `${styles.menu__item} ${styles.active} ` : styles.menu__item}>
          <Link
          to="/about/" className={`${styles.menu__link} ${styles.menu__linkGreen}`}
        >
          +48 42 208 81 80
        </Link>
        </li>
      )
      }}
    </Location>
      
    </ul>
  </div>
</div>
</nav>
)

}
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
