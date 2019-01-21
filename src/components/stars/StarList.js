import React, { Component } from 'react'
import someStar from "./Stars.png"
import "./StarList.css"

export default class StarList extends Component {
    render () {
        return (
            <section className="stars">
            {
                this.props.stars.map(star =>
                    <div key={star.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={someStar} alt="starPic" className="icon--star" />
                                {star.name}
                                <a href="#"
                                    onClick={() => this.props.deleteStar(star.id)}
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