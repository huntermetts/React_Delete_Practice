import React, { Component } from 'react'
import somePlanet from "./Planets.png"
import "./PlanetList.css"

export default class PlanetList extends Component {
    render () {
        return (
            <section className="planets">
            {
                this.props.planets.map(planet =>
                    <div key={planet.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={somePlanet} alt="planetPic" className="icon--planet" />
                                {planet.name}
                                <a href="#"
                                    onClick={() => this.props.deletePlanet(planet.id)}
                                    className="card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}