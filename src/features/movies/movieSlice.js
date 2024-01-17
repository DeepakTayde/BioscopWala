import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPopularMovies, getMovieDetails } from '../../services/api';

export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchPopularMovies',
  async () => {
    const movies = await getPopularMovies();
    return movies;
  }
);

export const fetchMovieDetails = createAsyncThunk(
  'movies/fetchMovieDetails',
  async (movieId) => {
    const movieDetails = await getMovieDetails(movieId);
    return movieDetails;
  }
);

const initialState = {
  popularMovies: [],
  movieDetails: null,
  status: 'idle',
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.popularMovies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchMovieDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movieDetails = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
