import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="logo.png" alt="Logo" />
      </Link>
      <nav>
        <button><Link to="/genre/action">Action</Link></button>
        <button><Link to="/genre/comedy">Comedy</Link></button>
        <button><Link to="/genre/drama">Drama</Link></button>
        <button><Link to="/genre/horror">Horror</Link></button>
      </nav>
      <select>
        <option value="">Select a cinema</option>
        <option value="cinema1">Cinema 1</option>
        <option value="cinema2">Cinema 2</option>
        <option value="cinema3">Cinema 3</option>
      </select>
      <input type="date" />
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