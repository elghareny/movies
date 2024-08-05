/** @format */

import {configureStore} from "@reduxjs/toolkit";

import moviesStore from "./slices/MoviesSlices";

export default configureStore({
	reducer: {
		moviesStore,
	},
});
