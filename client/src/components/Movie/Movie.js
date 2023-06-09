import React from "react"
import "./movie.css"

const Movie = ({movie}) => {
    return (
        <div className="movie">
            <h2>{movie.title}</h2>
            <img src={movie.image} alt="movie.title" />
            <p><span>Rating:</span><span>{movie.rating}</span></p>
        </div>
    )
}

export default Movie