import Constants from "./Constants"

const Endpoints = {
    POPULAR_MOVIES_URL : `${Constants.BASE_URL}/movie/popular`,
    DISCOVER_MOVIE_URL : `${Constants.BASE_URL}/discover/movie`,
    SEARCH_MOVIE_URL : `${Constants.BASE_URL}/search/movie`,
    MOVIE_LIST_BY_GENRE_URL : `${Constants.BASE_URL}/genre/movie/list`,
    TV_LIST_BY_GENRE_URL : `${Constants.BASE_URL}/genre/movie/list`,
    AUTH_URL : `${Constants.BASE_URL}/authentication`,
    REGISTER_URL : `${Constants.BASE_URL}auth/register`,
    LOGIN_URL : `${Constants.BASE_URL}auth/login`

}

export default Endpoints;