import React, { useState, useEffect, useRef } from 'react';
import endpoint from '../../services/endpoint';

const MovieCarousel = ({ movies = [] }) => {
  const carouselRef = useRef(null);
  const [isMoving, setIsMoving] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleMouseDown = (event) => {
      setIsMoving(true);
      setStartX(event.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseMove = (event) => {
      if (!isMoving) return;
      const x = event.pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      setIsMoving(false);
    };

    carouselRef.current.addEventListener('mousedown', handleMouseDown);
    carouselRef.current.addEventListener('mousemove', handleMouseMove);
    carouselRef.current.addEventListener('mouseup', handleMouseUp);

    return () => {
      carouselRef.current.removeEventListener('mousedown', handleMouseDown);
      carouselRef.current.removeEventListener('mousemove', handleMouseMove);
      carouselRef.current.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isMoving, startX, scrollLeft]);

  return (
    <div
      ref={carouselRef}
      className="carousel bg-black py-4 overflow-hidden relative"
      style={{
        cursor: isMoving ? 'grabbing' : 'grab',
        width: '100%',
        maxWidth: '1370px',
        overflowX: 'hidden', // Evitar el desbordamiento horizontal
      }}
    >
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: isMoving ? 'scale(0.98)' : 'none' }}
      >
        {movies.length &&
          movies.map((movie) => (
            <div key={movie.id} className="movie-card w-64 mr-4">
              <img
                src={endpoint.urlBaseImages(movie.poster_path)}
                alt={movie.title}
                className="w-full h-full object-cover object-center rounded-lg shadow-md"
                style={{ width: '300px', height: '150px' }} // Tamaño fijo para las imágenes
              />
              <div className="mt-2">
                <h2 className="text-lg font-semibold text-white">{movie.title}</h2>
                <p className="text-gray-100">{movie.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieCarousel;