import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PropTypes from 'prop-types'

function Message({message}) {
    return (
        <div>
            {message ? (
                <div>{message}</div>
            ) : (
                <div>WTF?!</div>
            )}
        </div>
    ) 
}


const FourthPage = () => (
    <div>
        <h1>Fourth Page</h1>
        <h2>Conditionally Render A React Component</h2>
        <p>In this lesson, we will explore JSX a little further by looking at how to conditionally render JSX with a Javascript ternary operator. We will see how JSX is simply syntax sugar on top of the React API: React.createElement.</p>

        {/* <Message message={"Hi Bruh"} /> */}
        <Message message={null} />

        <Link to="/">Index Page</Link>
        <Link to="/page-2/">Second Page</Link>
        <Link to="/page-3/">Third Page</Link>
    </div>
)


export default FourthPage