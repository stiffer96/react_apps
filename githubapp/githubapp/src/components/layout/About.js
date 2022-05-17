import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div className="container text-center">
               <h1> About us</h1>
<p>In this example, the navigation bar is hidden on small screens and replaced by a button in the top right corner (try to re-size this window).

Only when the button is clicked, the navigation bar will be displayed.</p>

<p>Tip: You can also remove the .navbar-expand-md class to ALWAYS hide navbar links and display the toggler button.</p>
            </div>
        )
    }
}

export default About
