import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from "gatsby-image";

const Message = props => <div>{props.children}</div>

const IndexPage = () => (
  <div>
    <h1>Tarjetas de Crédito</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="container">
      <Message>"Hello Chuck"</Message>
      <Message>"Goodbye World"</Message>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
