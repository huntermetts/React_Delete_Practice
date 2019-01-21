import { Route } from 'react-router-dom'
import React, { Component } from "react"
import PlanetList from './planets/PlanetList'
import UserList from './users/UserList'
import StarList from './stars/StarList'


export default class ApplicationViews extends Component {
    state = {
        planets: [],
        users: [],
        stars: []
    }

    // Fetch to change state above:
    componentDidMount() {
        const newState = {}
        // Fetching the different arrays in JSON with fetches
        fetch("http://localhost:5002/planets")
            .then(r => r.json())
            .then(planets => newState.planets = planets)
            //

            .then(() => fetch("http://localhost:5002/users")
            .then(r => r.json()))
            .then(users => newState.users = users)
            // //

            .then(() => fetch("http://localhost:5002/stars")
            .then(r => r.json()))
            .then(stars => newState.stars = stars)
            // //

            // .then(() => fetch("http://localhost:5002/locations")
            // .then(r => r.json()))
            // .then(locations => newState.locations = locations)
            // //

            // .then(() => fetch("http://localhost:5002/owners")
            // .then(r => r.json()))
            // .then(owners => newState.owners = owners)
            // //

            // Setting new state:
            .then(() => this.setState(newState))
    }


    // Delete animal fetch call
    deletePlanet = id => {
        return fetch(`http://localhost:5002/planets/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/planets`))
        .then(e => e.json())
        .then(planets => this.setState({
            planets: planets
        })
      )
    }

    deleteStar = id => {
        return fetch(`http://localhost:5002/stars/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/stars`))
        .then(e => e.json())
        .then(stars => this.setState({
            stars: stars
        })
      )
    }

    // deleteOwner = id => {
    //     return fetch(`http://localhost:5002/owners/${id}`, {
    //         method: "DELETE"
    //     })
    //     .then(e => e.json())
    //     .then(() => fetch(`http://localhost:5002/owners`))
    //     .then(e => e.json())
    //     .then(owners => this.setState({
    //         owners:owners
    //     })
    //   )
    // }





    render() {
        return (
            <React.Fragment>
                {/* <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                {/* <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} /> */}
                {/* Passing delete to AnimalList component */}
                <Route exact path="/stars" render={(props) => {
                    return <StarList deleteStar={this.deleteStar} stars={this.state.stars} />
                }} />
                <Route exact path="/" render={(props) => {
                    return <UserList users={this.state.users}/>
                }} />


                {/* Passing delete to AnimalList component */}
                <Route exact path="/planets" render={(props) => {
                    return <PlanetList deletePlanet={this.deletePlanet} planets={this.state.planets} />
                }} />
            </React.Fragment>
        )
    }
}