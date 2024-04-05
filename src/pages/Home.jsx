import React from 'react';
import MovieCarousel from '../components/MovieCarousel/carousel';
import { getMovies } from '../services/movieService'; // Suponiendo que tengas un servicio para obtener películas

const Home = () => {
  // Suponiendo que obtienes las películas de algún lugar (por ejemplo, una API)
  const [movies, setMovies] = React.useState([]);

  // Lógica para obtener las películas (puedes ajustar esto según tu caso)
  React.useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovies(); // Función para obtener películas desde tu servicio
        setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <MovieCarousel movies={movies} />
    </div>
  );
};

export default Home;