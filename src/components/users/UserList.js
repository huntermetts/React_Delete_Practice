import React, { Component } from 'react'
// import someUser from "./Users.png"
import "./UserList.css"

export default class UserList extends Component {
    render () {
        return (
            <section className="users">
            {
                this.props.users.map(user =>
                <div>
                    <h2>Welcome, {user.name}!</h2>
                    <h4>Here's a list of cool things to do:</h4>
                    <a href="https://www.geoguessr.com/" className="link">Geo Guessr</a> <br/>
                    <a href="http://asoftmurmur.com/" className="link">A Soft Murmur</a>
                    <br/>
                    <a href="https://classicreload.com/oregon-trail.html" className="link">Oregon Trail</a>
                    <br/>
                    <a href="https://giphy.com/search/monkey-on-phone" className="link">A Monkey On The Phone</a>
                </div>
                )
            }
            </section>
        )
    }
}