/** @format */

import {BiSolidStar} from "react-icons/bi";
import {useSelector} from "react-redux";
import {imagePath} from "../../redux/slices/MoviesSlices";
import {CircularProgress} from "@mui/material";

const MovieDetails = () => {
	const {isLoading} = useSelector((state) => state.moviesStore);
	const details = JSON.parse(localStorage.getItem("movieDetail"));
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
						</div>
					</div>
					<div className='mt-10 w-full h-[2px] bg-white'></div>
				</div>
			)}
		</>
	);
};

export default MovieDetails;
