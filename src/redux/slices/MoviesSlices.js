/** @format */

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const imagePath = "https://image.tmdb.org/t/p/w500/";

const initialState = {
	movies: [],
	watchList: JSON.parse(localStorage.getItem("watchList")) || [],
	moviesSearch: [],
	genres: [],
	movieDetail: null,
	trending: [],
	isLoading: {
		moviesLoading: false,
		detailsLoading: false,
		searchLoading: false,
		trendingLoading: false,
		genresLoading: false,
	},
	error: {
		moviesError: null,
		detailsError: null,
		trendingError: null,
		searchError: null,
		genresError: null,
	},
};

export const getTrendingMovies = createAsyncThunk(
	"movies/getTrendingMovies",
	async (_, thunkAPI) => {
		const {rejectWithValue} = thunkAPI;
		try {
			const response = await axios.request({
				method: "GET",
				url: "https://api.themoviedb.org/3/trending/movie/day",
				params: {language: "en-US"},
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDE0ZjY4OTY3YzE3ZGFiZTY0MmNhOGQ3MmQxMjMxNiIsIm5iZiI6MTcyMjM0ODQzMC4wMjg3ODMsInN1YiI6IjYzZWE0YzNmOTUxMmUxMDA3OTQxODRkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KebL4E1aeBiN7NEj52eeLByzhBW0bcAMRExjF8TB5K0",
				},
			});
			const data = await response.data;
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);

export const getAllMovies = createAsyncThunk(
	"movies/getAllMovies",
	async (page, thunkAPI) => {
		const {rejectWithValue} = thunkAPI;
		try {
			const response = await axios.request({
				method: "GET",
				url: "https://api.themoviedb.org/3/discover/movie",
				params: {
					include_adult: "false",
					include_video: "true",
					language: "en-US",
					page: page,
					sort_by: "popularity.desc",
				},
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDE0ZjY4OTY3YzE3ZGFiZTY0MmNhOGQ3MmQxMjMxNiIsIm5iZiI6MTcyMjE4NDgyMi41MzAwMzYsInN1YiI6IjYzZWE0YzNmOTUxMmUxMDA3OTQxODRkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vskj9Natugc-6J-6okEJA9iV1BGqNptuh1wjwmWE-Mw",
				},
			});
			const data = response.data;
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);
export const getMovieDetails = createAsyncThunk(
	"movies/getMovieDetails",
	async (id, thunkAPI) => {
		const {rejectWithValue} = thunkAPI;
		try {
			const response = await axios.request({
				method: "GET",
				url: `https://api.themoviedb.org/3/movie/${id}`,
				params: {
					language: "en-US",
					include_video: "true",
				},
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDE0ZjY4OTY3YzE3ZGFiZTY0MmNhOGQ3MmQxMjMxNiIsIm5iZiI6MTcyMjE4NDgyMi41MzAwMzYsInN1YiI6IjYzZWE0YzNmOTUxMmUxMDA3OTQxODRkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vskj9Natugc-6J-6okEJA9iV1BGqNptuh1wjwmWE-Mw",
				},
			});
			const data = response.data;
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);

export const getSearch = createAsyncThunk(
	"movies/getSearch",
	async (query, thunkAPI) => {
		const {rejectWithValue} = thunkAPI;
		try {
			const response = await axios.request({
				method: "GET",
				url: "https://api.themoviedb.org/3/search/movie",
				params: {
					query: query,
					include_adult: "false",
					language: "en-US",
					page: "1",
				},
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDE0ZjY4OTY3YzE3ZGFiZTY0MmNhOGQ3MmQxMjMxNiIsIm5iZiI6MTcyMjE4NDgyMi41MzAwMzYsInN1YiI6IjYzZWE0YzNmOTUxMmUxMDA3OTQxODRkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vskj9Natugc-6J-6okEJA9iV1BGqNptuh1wjwmWE-Mw",
				},
			});
			const data = response.data;
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);

export const getGenres = createAsyncThunk(
	"movies/getGenres",
	async (_, thunkAPI) => {
		const {rejectWithValue} = thunkAPI;
		try {
			const response = await axios.request({
				method: "GET",
				url: "https://api.themoviedb.org/3/genre/movie/list",
				params: {language: "en"},
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDE0ZjY4OTY3YzE3ZGFiZTY0MmNhOGQ3MmQxMjMxNiIsIm5iZiI6MTcyMjQ0MTI1Mi4zNTA5MDIsInN1YiI6IjYzZWE0YzNmOTUxMmUxMDA3OTQxODRkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P_ixqWe9yGV0CvF5KvLXT7mVucbzmSBsShXs_pEn-JE",
				},
			});
			const data = response.data;
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);
const handleWatchList = (state, action) => {
	state.watchList.push(action.payload);
};
const clearWatchList = (state) => {
	state.watchList = [];
};
const removeFromWatchList = (state, action) => {
	for (let i = 0; i < state.watchList.length; i++) {
		if (state.watchList[i].id === action.payload) {
			state.watchList.splice(i, 1);
		}
	}
};
const clearSearch = (state) => {
	state.moviesSearch = [];
};

const MoviesSlices = createSlice({
	name: "movies",
	initialState,
	reducers: {
		clearingSearch: clearSearch,
		addToWatchList: handleWatchList,
		removeWatchList: removeFromWatchList,
		clearList: clearWatchList,
	},
	extraReducers: (builder) => {
		builder.addCase(getAllMovies.pending, (state) => {
			state.isLoading.moviesLoading = true;
			state.error.moviesError = null;
		});
		builder.addCase(getAllMovies.fulfilled, (state, action) => {
			state.isLoading.moviesLoading = false;
			state.movies = action.payload.results;
			state.error.moviesError = null;
		});
		builder.addCase(getAllMovies.rejected, (state, action) => {
			state.isLoading.moviesLoading = false;
			state.error.moviesError = action.payload;
		});
		builder.addCase(getTrendingMovies.pending, (state) => {
			state.isLoading.trendingLoading = true;
			state.error.trendingError = null;
		});
		builder.addCase(getTrendingMovies.fulfilled, (state, action) => {
			state.isLoading.trendingLoading = false;
			state.trending = action.payload.results;
			state.error.trendingError = null;
		});
		builder.addCase(getTrendingMovies.rejected, (state, action) => {
			state.isLoading.trendingLoading = false;
			state.error.trendingError = action.payload;
		});
		builder.addCase(getMovieDetails.pending, (state) => {
			state.isLoading.detailsLoading = true;
			state.error.detailsError = null;
		});
		builder.addCase(getMovieDetails.fulfilled, (state, action) => {
			state.isLoading.detailsLoading = false;
			state.movieDetail = action.payload;
			state.error.detailsError = null;
			localStorage.setItem("movieDetail", JSON.stringify(state.movieDetail));
		});
		builder.addCase(getMovieDetails.rejected, (state, action) => {
			state.isLoading.detailsLoading = false;
			state.error.detailsError = action.payload;
		});
		builder.addCase(getSearch.pending, (state) => {
			state.isLoading.searchLoading = true;
			state.error.searchError = null;
		});
		builder.addCase(getSearch.fulfilled, (state, action) => {
			state.isLoading.searchLoading = false;
			state.moviesSearch = action.payload.results;
			state.error.searchError = null;
		});
		builder.addCase(getSearch.rejected, (state, action) => {
			state.isLoading.searchLoading = false;
			state.error.searchError = action.payload;
		});
		builder.addCase(getGenres.pending, (state) => {
			state.isLoading.genresLoading = true;
			state.error.genresError = null;
		});
		builder.addCase(getGenres.fulfilled, (state, action) => {
			state.isLoading.genresLoading = false;
			state.genres = action.payload.genres;
			state.error.genresError = null;
		});
		builder.addCase(getGenres.rejected, (state, action) => {
			state.isLoading.genresLoading = false;
			state.error.genresError = action.payload;
		});
	},
});

export const {clearingSearch, addToWatchList, removeWatchList, clearList} =
	MoviesSlices.actions;
export default MoviesSlices.reducer;
