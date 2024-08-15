/** @format */

import {useDispatch, useSelector} from "react-redux";
import {
	getMovieDetails,
	getMoviesCredits,
	imagePath,
} from "../../redux/slices/MoviesSlices";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {CircularProgress} from "@mui/material";

const ListSearch = ({handleSearch}) => {
	ListSearch.propTypes = {
		handleSearch: PropTypes.func.isRequired,
	};
	const dispatch = useDispatch();
	const {moviesSearch, isLoading} = useSelector((state) => state.moviesStore);

	const handleDetailsFromSearch = (id) => {
		dispatch(getMovieDetails(id));
		dispatch(getMoviesCredits(id));
		handleSearch();
	};
	return (
		<div className=' flex flex-col gap-5 p-3 w-[380px] bg-[#141617] max-h-[calc(100vh_-_80px)] h-auto overflow-y-auto absolute top-10 -right-6 rounded-lg overscroll-y-none z-10'>
			{!isLoading.searchLoading ? (
				moviesSearch.map((item) => {
					return (
						<Link
							key={item.id}
							to={`/details/${item.id}`}
							onClick={() => handleDetailsFromSearch(item.id)}
							className='flex items-center gap-1 px-2 w-full h-[100px] bg-[#282e30] rounded-md cursor-pointer'>
							<div className='  h-[90px] object-cover w-[50px]  px-1 py-4 '>
								<img
									className=' h-full w-full object-fill rounded-md'
									src={`${imagePath}${item.poster_path}`}
									alt='image'
								/>
							</div>
							<div className='flex items-center text-[14px] flex-wrap w-2/3 h-full'>
								<p>{item.title}</p>
							</div>
						</Link>
					);
				})
			) : (
				<div className='my-2 flex justify-center items-center h-auto'>
					<CircularProgress
						color='error'
						size='30px'
					/>
				</div>
			)}
		</div>
	);
};

export default ListSearch;
