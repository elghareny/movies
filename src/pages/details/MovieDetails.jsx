/** @format */

import {BiSolidStar} from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux";
import {addToWatchList, imagePath} from "../../redux/slices/MoviesSlices";
import {CircularProgress} from "@mui/material";
import {IoAdd} from "react-icons/io5";
import {useRef} from "react";

const MovieDetails = () => {
	const addedBefore = useRef(false);
	const dispatch = useDispatch();
	const {isLoading, casts, crews, watchList} = useSelector(
		(state) => state.moviesStore,
	);
	const details = JSON.parse(localStorage.getItem("movieDetail"));
	// const movieVideo = JSON.parse(localStorage.getItem("movieVideo"));

	const addedToWatchList = (movie) => {
		for (let i = 0; i < watchList.length; i++) {
			if (watchList[i].id === movie.id) {
				addedBefore.current = true;
				break;
			}
		}
		if (addedBefore.current) {
			return;
		} else {
			dispatch(addToWatchList(movie));

			// });
		}
	};

	const castsList = casts.map((cast, index) => {
		return (
			index < 5 && (
				<div className='flex flex-col space-y-3 items-center  h[150px] '>
					<img
						key={cast.id}
						className='object-fill w-[150px] h-[150px] rounded-lg'
						src={`${imagePath}${cast.profile_path}`}
						alt={cast.name}
					/>
					<h3 className='text-white text-[16px]'>
						{cast.name.slice(0, 15) + "..."}
					</h3>
				</div>
			)
		);
	});
	const crewsList = crews.map((crew, index) => {
		return (
			index < 5 && (
				<div className='flex flex-col space-y-3 items-center  h[150px] '>
					<img
						key={crew.id}
						className='object-fill w-[150px] h-[150px] rounded-lg'
						src={`${imagePath}${crew.profile_path}`}
						alt={crew.name}
					/>
					<h3 className='text-white text-[16px]'>
						{crew.name.slice(0, 15) + "..."}
					</h3>
				</div>
			)
		);
	});
	return (
		<>
			{isLoading.detailsLoading ? (
				<div className='flex justify-center items-center h-dvh'>
					<CircularProgress
						color='error'
						size='100px'
					/>
				</div>
			) : (
				<div className=''>
					<div className='relative  text-white flex justify-start items-center  w-full max-h-[500px] h-fit pt-[80px]'>
						<div className='absolute blur-lg left-0 top-0 w-full h-full opacity-40 -z-[1]'>
							<img
								className='w-full h-full'
								src={`${imagePath}${details.poster_path}`}
								alt=''
							/>
						</div>
						<div className='flex'>
							<div className=' w-fit  h-[500px] rounded-lg py-8 px-5'>
								<img
									className='object-fill w-full h-full rounded-lg'
									src={`${imagePath}${details.poster_path}`}
									alt=''
								/>
							</div>
							<div className='flex flex-col w-full justify-center gap-5 p-4 '>
								<p className='flex gap-3 items-center text-[18px]'>
									<i className='text-red-600'>
										<BiSolidStar />
									</i>
									<p>{Math.round(details.vote_average)}</p>
								</p>
								<h1 className='text-3xl font-bold'>{details.title}</h1>
								<p className='text-[18px]'>{details.release_date}</p>
								<p className='text-[20px] flex flex-col gap-3'>
									<span className='text-[#777] text-2xl font-bold'>
										overview
									</span>
									{details.overview}
								</p>
							</div>
							<button
								className='flex items-center justify-center absolute top-20 right-10 bg-red-600 text-white text-3xl font-bold w-[45px] h-[45px] rounded-lg'
								onClick={() => {
									addedToWatchList(details);
								}}>
								<IoAdd />
							</button>
						</div>
					</div>
					<div className='mt-10 w-full h-[2px] bg-white'></div>
					<div className='flex flex-col items-center my-10 space-y-5'>
						<div className='flex flex-col items-center'>
							<div className='bg-gray-400 rounded-3xl text-white text-2xl px-10 py-5'>
								Casts
							</div>
							<div className='flex  space-x-2 w-full my-5 p-2'>{castsList}</div>
						</div>
						<div className='flex flex-col items-center'>
							<div className='bg-gray-400 rounded-3xl text-white text-2xl px-10 py-5'>
								Crews
							</div>
							<div className=' flex  my-5 space-x-2 w-full p-2'>
								{crewsList}
							</div>
						</div>
					</div>

					<div>{/* <video src={details}></video> */}</div>
				</div>
			)}
		</>
	);
};

export default MovieDetails;
