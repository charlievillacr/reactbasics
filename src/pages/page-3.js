import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from "gatsby-image";
import PropTypes from 'prop-types';


const ThirdPage = () => (
  <div>
    <h1>Third Page</h1>
    <h2>Validate Custom React Component Props with PropTypes</h2>
    <p>Con ayuda de Guayo</p>
    <SayHelloAsClass firstName='Maria' lastName='Perez' />
    <SayHelloAsFunction firstName='Carlos' lastName='Villalobos' />
    <Link to="/">Index Page</Link>
    <Link to="/page-2/">Second Page</Link>
    <Link to="/page-3/">Third Page</Link>
    <Link to="/page-4/">Fourth Page</Link>
  </div>
)

function SayHelloAsFunction({firstName, lastName}) {
  return (
    <div>
      Hello {firstName} {lastName}!
    </div>
  )
}

SayHelloAsFunction.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}

class SayHelloAsClass extends React.Component {
  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }
  render() {
    const {firstName, lastName} = this.props
    return (
      <div>
        Hello {firstName} {lastName}!
      </div>
    )
  }
}


export default ThirdPage