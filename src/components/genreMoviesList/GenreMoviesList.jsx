/** @format */

import {useSelector} from "react-redux";
import GenreOneList from "./GenreOneList";

const GenreMoviesList = () => {
	const {genres} = useSelector((state) => state.moviesStore);

	return (
		<div className='w-full h-full text-white'>
			{genres.map((genre, index) => {
				return (
					index < 4 && (
						<div
							key={genre.id}
							className='w-full h-full my-5 container'>
							<h2 className='text-4xl px-5 py-2'>{genre.name}</h2>
							<GenreOneList genre={genre} />
						</div>
					)
				);
			})}
		</div>
	);
};

export default GenreMoviesList;
