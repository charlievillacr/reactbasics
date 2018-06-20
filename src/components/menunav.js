import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'


const TopMenu = styled.div`
    background-color: red;
`

const menunav = () => (
    <TopMenu>
        <Link to="/index">Homepage</Link>
        <Link to="/page-2">Page-2</Link>
    </TopMenu>
)

export default menunav