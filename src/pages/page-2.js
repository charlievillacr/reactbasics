import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from "gatsby-image";
import PropTypes from 'prop-types';


const SecondPage = () => (
  <div>
    <h1>Second Page</h1>
    <h2>Validate Custom React Component Props with PropTypes</h2>
    <p>In this lesson, we'll learn how you can use the prop-types module to validate a custom React component's props. We will start by building out a Proptypes object that throws an error if the prop passed is not of the required type. Then, we will import the React team's prop-types module and look at some of the useful utilities it provides like isRequired. Function components define Proptypes off of a property while Class components define Proptypes off of a static method.</p>
    <SayHelloAsClass firstName='Hannia' lastName='Jimenez' />
    <SayHello firstName='Guayo' />
    <Link to="/">Home Page</Link>
    <Link to="/page-2/">Second Page</Link>
    <Link to="/page-3/">Third Page</Link>
    <Link to="/page-4/">Fourth Page</Link>
    <Link to="/page-5/">Fifth Page</Link>
  </div>
)

function SayHello(props) {
  return (
    <div>
      Hello {props.firstName}{' '}
      {props.lastName || 'Unknown'}!
    </div>
  )
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



export default SecondPage 

    
