import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from "gatsby-image";
import logo from '../img/logo.png'


const logoHeader = styled.div`
  max-width: '40px';
`

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#dc1431',
      marginBottom: '50px',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '10px 10px',
      }}
    >
        <Link to="/">
        <img src={logo}
          alt="BAC"
          style={{
            width: '20%',
        }} />
        </Link>
    </div>
  </div>
)

export default Header
