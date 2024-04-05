import React from 'react';
// import { getMovies } from '../services/movieService'; // Suponiendo que tengas un servicio para obtener películas
// import MovieCarousel from '../components/commons/Carousel';
import Card from '../components/Card';

const Home = ({movies =[]}) => {
  // Suponiendo que obtienes las películas de algún lugar (por ejemplo, una API)
//   const [movies, setMovies] = React.useState([]);

//   // Lógica para obtener las películas (puedes ajustar esto según tu caso)
//   React.useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const moviesData = await getMovies(); // Función para obtener películas desde tu servicio
//         setMovies(moviesData);
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//       }
//     };

//     fetchMovies();
//   }, []);

  return (
    <div>
      <h1 className='m-b25px'>EN CARTELERA</h1>
      <br />    
      <section>
      {movies.length ? (
        movies.map(item=><Card key={item.id} movie={item}/>)
      ):<div>...Cargando</div>}
      </section>
      {/* <MovieCarousel movies={movies} /> */}
    </div>
  );
};

export default Home;