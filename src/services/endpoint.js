const API_TMBD_BASE = `https://api.themoviedb.org/3/movie/`

const API_TMDB = `${API_TMBD_BASE}now_playing`
const API_KEY = `61a187c62815374762d738c6d992d202`

const endpoint = {
    getAllMovies: `${API_TMDB}?api_key=${API_KEY}&language=es-ES`,
    getMovie: (idMovie) => `${API_TMBD_BASE}${idMovie}api_key=${API_KEY}&language=es-ES`

}
export default endpoint