import axios from 'axios';
import Constants from './Constants';
import Endpoints from './EndPoints';


export const getPopularMovies = async () => {
  try {
    const response = await axios.get(Endpoints.POPULAR_MOVIES_URL, {
      params: {
        api_key: Constants.API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${Constants.BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: Constants.API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};
