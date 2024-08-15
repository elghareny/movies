/** @format */
import {Pagination} from "@mui/material";

import "../../index.css";
import MovieItem from "./MovieItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllMovies} from "../../redux/slices/MoviesSlices";

const MoviesList = () => {
	const {movies} = useSelector((state) => state.moviesStore);
	const dispatch = useDispatch();
	const [page, setPage] = useState(1);

	const handlePage = (e, value) => {
		setPage(value);
	};

	useEffect(() => {
		dispatch(getAllMovies(page));
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
			<div className='my-5 flex justify-center items-center gap-8'>
				<div className='w-fit bg-white p-2 rounded-3xl'>
					<Pagination
						// className={classes.root}
						count={500}
						size='large'
						variant='text'
						shape='circular'
						color='primary'
						onChange={handlePage}
						page={page}
						showFirstButton
						showLastButton
					/>
				</div>
			</div>
			<div className='grid grid-cols-4 gap-10 mt-10'>{moviesList}</div>
		</div>
	);
};

export default MoviesList;
