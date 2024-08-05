/** @format */

import {Route, Routes} from "react-router";
import "./App.css";
import Navbar from "./common/Navbar/Navbar";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/details/MovieDetails";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getGenres, getTrendingMovies} from "./redux/slices/MoviesSlices";
import WatchList from "./pages/watchList/WatchList";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTrendingMovies());
		dispatch(getGenres());
		// dispatch(getAllMovies());
	}, [dispatch]);
	return (
		<>
			<Navbar />
			{/* <Home /> */}
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/details/:id'
					element={<MovieDetails />}
				/>
				<Route
					path='/watchList'
					element={<WatchList />}
				/>
			</Routes>
		</>
	);
}

export default App;
