import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Details = () => {
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        Axios.get('http://localhost:3000/peliculas/1')
            .then(response => {
                setMovieDetails(response.data);
            })
            .catch(error => {
                console.error('Error fetching movie details:', error);
            });
    }, []);

    return (
        <section className='ml-10 mt-20'>
            {movieDetails && (
                <section className='flex mb-14'>
                    <figure className='h-40 bg-red mr-10'>
                        <img className='h-full' src={movieDetails.urlImagen} alt={movieDetails.nombre} />
                    </figure>
                    <figcaption>
                        <article className='mb-5'>
                            <p className='font-bold text-lg'>{movieDetails.nombre}</p>
                        </article>
                        <article className='mb-6'>
                            <p className='font-bold text-lg'>{movieDetails.nombre}</p>
                        </article>
                        <article className='flex'>
                            <p className='py-1 mr-1 px-2 bg-movie-class-bg-color text-white font-bold rounded-lg'>{movieDetails.publico}</p>
                            <p className='py-1 mr-1 px-2 bg-movie-dur-bg-color text-white font-bold rounded-lg'>{`${movieDetails.duracion} min`}</p>
                            <p className='py-1 px-2 text-white font-bold bg-movie-genre-bg-color rounded-lg'>{movieDetails.generos}</p>
                        </article>
                    </figcaption>
                </section>
            )}
            <section>
                <article>
                    <p className='font-bold'>Trailer</p>
                </article>
                <figure>
                    <img src={movieDetails && movieDetails.urlTrailerImagen} alt="Trailer de la película" />
                </figure>
                <figcaption className='mt-4'>
                    <p className='font-bold'>Sinopsis</p>
                </figcaption>
                <article className='texto__sipnosis'>
                    <p>{movieDetails && movieDetails.descripcion}</p>
                </article>
            </section>
        </section>
    );
};

export default Details;
