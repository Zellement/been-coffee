import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { motion } from 'framer-motion'
import Nav from './Nav'
import Logo from './atoms/Logo'

const Header = ({ siteTitle }) => (
  <header className="p-20 pb-0 lg:p-40 lg:pb-0">

      <Link className="block w-full max-w-screen-sm mx-auto text-center" to="/">
        <Logo />
      </Link>

      {/* <Nav /> */}

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
