/** @format */

import {BiMenu, BiSolidHeart} from "react-icons/bi";
import {
	addToWatchList,
	getMovieDetails,
	getMoviesCredits,
	getMovieVideo,
	imagePath,
} from "../../redux/slices/MoviesSlices";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {SlOptions} from "react-icons/sl";
import {useEffect, useRef, useState} from "react";
import {CircularProgress} from "@mui/material";

const MovieItem = ({movie}) => {
	MovieItem.propTypes = {
		movie: PropTypes.any.isRequired,
	};
	const {watchList, isLoading} = useSelector((state) => state.moviesStore);
	const [options, setOptions] = useState(null);
	const addedBefore = useRef(false);
	const dispatch = useDispatch();

	const showOptions = options ? "block" : "hidden";
	const handelShow = () => {
		dispatch(getMovieDetails(movie.id));
		dispatch(getMovieVideo(movie.id));
		dispatch(getMoviesCredits(movie.id));
	};

	const addedToWatchList = (movie) => {
		for (let i = 0; i < watchList.length; i++) {
			if (watchList[i].id === movie.id) {
				addedBefore.current = true;
				break;
			}
		}
		if (addedBefore.current) {
			// toast.warn("🦄 Wow so easy!", {
			// 	position: "top-right",
			// 	autoClose: 4000,
			// 	hideProgressBar: false,
			// 	closeOnClick: true,
			// 	pauseOnHover: true,
			// 	draggable: true,
			// 	progress: undefined,
			// 	theme: "light",
			// 	transition: Bounce,
			// }
			// );
			return;
		} else {
			dispatch(addToWatchList(movie));
			// toast.success("🦄 Wow so easy!", {
			// 	position: "top-right",
			// 	autoClose: 4000,
			// 	hideProgressBar: false,
			// 	closeOnClick: true,
			// 	pauseOnHover: true,
			// 	draggable: true,
			// 	progress: undefined,
			// 	theme: "light",
			// 	transition: Bounce,
			// });
		}
	};

	useEffect(() => {
		localStorage.setItem("watchList", JSON.stringify(watchList));
	}, [watchList]);

	// const containingMovie = (
	// 	<div className=' absolute group-hover:opacity-100 rounded-lg bottom-0 left-0 w-full h-[calc(100%-100px)] flex flex-col gap-4 justify-evenly items-center transition-all duration-500 bg-[#ffffff9d] opacity-0 text-black'>
	// 		<div className='flex  flex-col gap-3 text-[16px] justify-center items-center text-white'>
	// 			<h1 className='text-2xl font-semibold text-center'>
	// 				{movie.title.slice(0, 20) + " ..."}
	// 			</h1>
	// 			<p className='flex gap-2 justify-center items-center text-[20px]'>
	// 				<i className='text-red-600'>
	// 					<BiSolidStar />
	// 				</i>
	// 				<p>{Math.round(movie.vote_average)}</p>
	// 			</p>
	// 			<p>{movie.release_date}</p>
	// 		</div>
	// 	</div>
	// );

	return (
		<>
			<div className='relative h-fit rounded-xl group cursor-pointer'>
				<Link
					to={`/details/${movie.id}`}
					className={`h-[300px] w-full object-fill rounded-xl ${
						options && "blur-md"
					} transition-all duration-500`}
					onClick={handelShow}>
					{isLoading.moviesLoading ? (
						<div className='my-20 flex justify-center items-center h-full'>
							<CircularProgress
								color='error'
								size='50px'
							/>
						</div>
					) : (
						<img
							className='h-full w-full rounded-xl '
							src={`${imagePath}${movie.poster_path}`}
							alt=''
						/>
					)}
				</Link>
				{!isLoading.moviesLoading && (
					<div
						className={`flex justify-center items-center text-white bg-red-600 absolute transition-all duration-500 ${
							options
								? "w-[26px] h-[26px] -top-1 -right-1"
								: "border-black border-[8px] w-[40px] h-[40px] -top-3 -right-3 "
						} rounded-full`}
						onClick={() => {
							setOptions(!options);
						}}
						onMouseEnter={() => setOptions(true)}
						onMouseLeave={() => setOptions(false)}>
						<SlOptions />
					</div>
				)}
				<div
					className={`${showOptions} absolute bg-white  top-6 -right-2 rounded-lg transition-all duration-500`}
					onMouseEnter={() => setOptions(true)}
					onMouseLeave={() => setOptions(false)}>
					<ul className='  flex flex-col justify-start items-start text-[18px]'>
						<Link
							to=''
							onClick={() => {
								addedToWatchList(movie);
								setOptions(false);
							}}
							className={` w-full h-full flex gap-2 justify-start items-center hover:bg-red-600 hover:rounded-t-lg hover:text-white px-6 py-3 border-b-[2px] border-gray-500`}>
							<BiMenu /> Add to List
						</Link>
						<li
							className={` w-full h-full flex gap-2 justify-start items-center hover:bg-red-600 hover:rounded-b-lg hover:text-white px-6 py-3`}>
							<BiSolidHeart /> Favorite
						</li>
					</ul>
				</div>
				{/* {containingMovie} */}
			</div>
		</>
	);
};

export default MovieItem;
