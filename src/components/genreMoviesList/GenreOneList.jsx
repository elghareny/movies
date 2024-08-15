/** @format */

import {useDispatch, useSelector} from "react-redux";
import {imagePath} from "../../redux/slices/MoviesSlices";
import {Link} from "react-router-dom";

const GenreOneList = ({genre}) => {
	// const [lists, setLists] = useState([]);
	const {moviesGenres} = useSelector((state) => state.moviesStore);
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(getMoviesGenres(genre.id));
	// }, [dispatch, genre]);

	// useEffect(() => {
	// 	setLists;

	return (
		<div className='flex flex-row justify-center items-center overflow-scroll w-[300%]  h-[200px]'>
			{moviesGenres.length !== 0 &&
				moviesGenres.map((obj) => {
					return obj.movies.map((item) => {
						return (
							<Link
								className='w-[200px] h-[200px] cursor-pointer'
								key={obj.id}
								to={`/details/${obj.id}`}>
								<img
									src={`${imagePath}${item.poster_path}`}
									className='w-full h-full'
								/>
							</Link>
						);
					});
				})}
		</div>
	);
};

export default GenreOneList;
