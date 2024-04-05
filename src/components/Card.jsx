import React from 'react';
import endpoint from '../services/endpoint';
import './Card.css'; // Asumiendo que tienes un archivo CSS externo llamado Card.css para los estilos

const Card = ({ movie = null }) => {
    return (
        movie && (
            <div className="card-container">
                <figure className="card-image">
                    <img src={endpoint.urlBaseImages(movie.poster_path)} alt={movie.title} />
                </figure>
                <h4>{movie.title}</h4>
                
            </div>
        )
    );
};

export default Card;