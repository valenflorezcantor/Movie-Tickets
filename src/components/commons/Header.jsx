import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black flex justify-between items-center p-4 h-15">
      <Link to="/" className="flex items-center">
        <img src="logo.png" alt="Logo" className="h-8 mr-2" />
        <h1 className="text-white text-lg font-bold">Cine Colombia</h1>
      </Link>
      <nav className="flex">
        <button className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-8 mt-1">
          <Link to="/genre/action">Acción</Link>
        </button>
        <button className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-8 mt-1">
          <Link to="/genre/comedy">Terror</Link>
        </button>
        <button className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-8 mt-1">
          <Link to="/genre/drama">Ciencia ficción</Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-8 mt-1">
          <Link to="/genre/horror">Comedia</Link>
        </button>
      </nav>
      <h2 className="text-white">Cinemas Cercanos</h2>
      <select className="ml-4">
        <option value="">Select a cinema</option>
        <option value="cinema1">Cinema 1</option>
        <option value="cinema2">Cinema 2</option>
        <option value="cinema3">Cinema 3</option>
      </select>
      <input type="date" className="ml-4" />
    </header>
  );
};

export default Header;

// Genre.jsx
// import React from 'react';

// const Genre = () => {
//   const { genre } = useParams();
//   return (
//     <div>
//       <h1>Movies of {genre}</h1>
//     </div>
//   );
// };

// export default Genre;

// // Asterisk route for not found
// import React from 'react';

// const NotFound = () => {
//   return (
//     <div>
//       <h1>Not Found</h1>
//     </div>
//   );
// };

// export default NotFound;
