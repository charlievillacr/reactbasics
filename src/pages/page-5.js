import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

class FifthPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            time: new Date().toLocaleTimeString(),
        };
        this.tick = this.tick.bind(this);
    }

    tick() {
        this.setState({ time: new Date().toLocaleTimeString() });
    }

    componentDidMount(){
        this.timer = setInterval(this.tick, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return(
            <div>
                <h1>Rerender a React Application</h1>
                <h2>FifthPage</h2>
                <p>In this lesson, we'll learn how we can call ReactDOM.render repeatedly with brand new React Elements and React will preserve element focus and only do the minimal required DOM operations for the re-render.</p>

                <div>
                    It is <input value={this.state.time} />
                </div>
                <Link to="/">Home Page</Link>
                <Link to="/page-2/">Second Page</Link>
                <Link to="/page-3/">Third Page</Link>
                <Link to="/page-4/">Fourth Page</Link>
                <Link to="/page-5/">Fifth Page</Link>
            </div>
        ) 
    }
}

// https://egghead.io/lessons/react-rerender-a-react-application

export default FifthPage