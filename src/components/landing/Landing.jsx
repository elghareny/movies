/** @format */
import {BiSolidStar} from "react-icons/bi";
import {imagePath} from "../../redux/slices/MoviesSlices";
import PropTypes from "prop-types";

const Landing = ({movie}) => {
	Landing.propTypes = {
		movie: PropTypes.any.isRequired,
	};
	return (
		<div className={`w-full  h-dvh  text-white font-bold `}>
			<div className='absolute w-full  h-full '>
				<img
					className='w-full  h-full object-cover blur-lg'
					src={`${imagePath}${movie.poster_path}`}
					alt=''
				/>
			</div>
			<div className='absolute opacity-50 bg-black w-full  h-full  '></div>
			<div className='container flex justify-center items-center gap-5 w-full h-full px-5 pt-5'>
				<div className=' container w-1/3  h-full flex flex-col justify-center z-10 '>
					<div className='w-fit h-fit '>
						<div className='flex mb-8 w-fit'>
							<i className='text-red-600 pr-2 text-[20px]'>
								<BiSolidStar />
							</i>
							<h1 className='flex justify-between gap-8 w-fit'>
								<span>{Math.round(movie.vote_average)}</span>.
								<span>{movie.release_date}</span>
							</h1>
						</div>
						<div className='max-w-[900px] w-fit'>
							<h1
								className={` text-5xl tracking-widest drop-shadow-lg shadow-white mb-8`}>
								{movie.title}
							</h1>
							<p className='text-[16px]'>{movie.overview}</p>
						</div>
					</div>
				</div>
				<div className=' w-full  h-[80%] rounded-lg z-[5]'>
					<img
						className='w-full  h-full rounded-lg object-fill'
						src={`${imagePath}${movie.poster_path}`}
						alt=''
					/>
				</div>
			</div>
			{/* <ul className=''>
				<li className='absolute left-1/2 bottom-10 translate-x-1/2 w-3 h-3 bg-white rounded-full cursor-pointer'></li>
			</ul> */}
		</div>
	);
};

export default Landing;
