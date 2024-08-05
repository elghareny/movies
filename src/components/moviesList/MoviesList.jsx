/** @format */
import {CircularProgress, Pagination} from "@mui/material";
// import {makeStyles} from "@mui/styles";

import "../../index.css";
import MovieItem from "./MovieItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllMovies} from "../../redux/slices/MoviesSlices";

// const useStyles = makeStyles({
// 	root: {
// 		"& .MuiPaginationItem-root": {
// 			backgroundColor: "lightblue", // Custom background color
// 			color: "white", // Custom text color
// 			"&:hover": {
// 				backgroundColor: "blue", // Change color on hover
// 			},
// 		},
// 	},
// });

const MoviesList = () => {
	const {isLoading, movies} = useSelector((state) => state.moviesStore);
	const dispatch = useDispatch();
	const [page, setPage] = useState(1);
	// const classes = useStyles();

	// const filter = (
	// 	<div className='flex justify-center items-center py-5'>
	// 		<ul className='flex text-white text-[18px] overflow-auto scroll-smooth scroll-0 gap-4 font-bold'>
	// 			{ul.map((genre, index) => {
	// 				return (
	// 					index < 6 && (
	// 						<li
	// 							key={index}
	// 							className={`p-2 cursor-pointer border-red-600 border-[3px] ${
	// 								activeIndex === index && "bg-red-600"
	// 							} hover:bg-red-600  rounded-lg w-[100px] flex justify-center items-center`}
	// 							onClick={() => {
	// 								handleClick(index);
	// 							}}>
	// 							{genre.name}
	// 						</li>
	// 					)
	// 				);
	// 			})}
	// 		</ul>
	// 	</div>
	// );

	// const [filteringMovies, setFilteringMovies] = useState(movies);
	// const [activeIndex, setActiveIndex] = useState(0);
	// const ul = [{id: 0, name: "All"}, ...genres];

	// const handleClick = (index) => {
	// 	setActiveIndex(index);
	// };
	// const handleFilterMovies = useCallback((movies, genre) => {
	// 	let filtering = [];
	// 	if (genre) {
	// 		if (genre.id === 0) {
	// 			filtering = movies;
	// 		} else
	// 			for (let i = 0; i < movies.length; i++) {
	// 				for (let j = 0; j < movies[i].genre_ids.length; j++) {
	// 					if (movies[i].genre_ids[j] === genre.id) filtering.push(movies[i]);
	// 				}
	// 			}
	// 		setFilteringMovies(filtering);
	// 	}
	// }, []);

	const handlePage = (e, value) => {
		setPage(value);
	};

	// const get = useCallback(
	// 	(page) => {
	// 		dispatch(getAllMovies(page));
	// 		handleFilterMovies(movies, activeIndex);
	// 		// setFilteringMovies(movies);
	// 	},
	// 	[dispatch, handleFilterMovies, activeIndex],
	// );

	useEffect(() => {
		dispatch(getAllMovies(page));
		// get(page);
	}, [dispatch, page]);

	const moviesList = movies.map((movie) => {
		return (
			<MovieItem
				movie={movie}
				key={movie.id}
			/>
		);
	});
	return (
		<div className='container pb-10'>
			<div className='my-5 flex bg-white justify-center items-center gap-8'>
				<Pagination
					// className={classes.root}
					count={500}
					size='large'
					variant='text'
					shape='rounded'
					color='secondary'
					onChange={handlePage}
					page={page}
					showFirstButton
					showLastButton
				/>
			</div>
			{isLoading.moviesLoading ? (
				<div className='my-20 flex justify-center items-center h-auto'>
					<CircularProgress
						color='error'
						size='100px'
					/>
				</div>
			) : (
				<div className='grid grid-cols-4 gap-10 mt-10'>{moviesList}</div>
			)}
		</div>
	);
};

export default MoviesList;
