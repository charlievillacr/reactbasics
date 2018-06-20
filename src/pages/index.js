import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import TopMenu from '../components/menunav'

const message = (props) => <div>{props.msg}</div>


const IndexPage = () => (
  <div>
    <TopMenu/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="container">
      {message({msg: 'Hello World'})}
      {message({msg: 'Goodbye World'})}
    </div>
    
  </div>
)

export default IndexPage
