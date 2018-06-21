import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from "gatsby-image";

const Message = props => <div>{props.children}</div>


const IndexPage = () => (
  <div>
    <h1>Introduction to The Beginner's Guide to ReactJS.</h1>
    <h2>Create HTML elements with React's createElement API</h2>
    <p>In this lesson we'll learn how to use raw React APIs to create the most basic Hello World example. React defines it’s own createElement function that we will see works similar to document.createElement. And in place of appendChild we will use ReactDOM's render function. We'll also learn a little bit about React props and the children prop</p>
    <div className="container">
      <Message>Hello Chuck</Message>
      <Message>Goodbye World</Message>
    </div>
    <Link to="/page-2/">Second Page</Link>
    <Link to="/page-3/">Third Page</Link>
  </div>
)

export default IndexPage
