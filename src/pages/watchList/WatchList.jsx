/** @format */

import {useDispatch, useSelector} from "react-redux";
import {
	clearList,
	getMovieDetails,
	imagePath,
	removeWatchList,
} from "../../redux/slices/MoviesSlices";
import {Link} from "react-router-dom";
import {CgClose} from "react-icons/cg";
import Swal from "sweetalert2";
import {useEffect} from "react";

const WatchList = () => {
	const {watchList} = useSelector((state) => state.moviesStore);
	const dispatch = useDispatch();

	const handelShow = (id) => {
		dispatch(getMovieDetails(id));
	};

	const alert = (text) =>
		Swal.fire({
			title: "Are you sure?",
			text: text,
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Confirm!",
			background: "white",
			color: "black",
		});

	const deleteElement = (id) => {
		alert("This movie will remove from your list!").then((result) => {
			if (result.isConfirmed) {
				dispatch(removeWatchList(id));
				Swal.fire({
					title: "Done!",
					text: "Your movie has been deleted.",
					icon: "success",
				});
			}
		});
	};

	const deleteAll = () => {
		alert("Your list will be cleared!").then((result) => {
			if (result.isConfirmed) {
				dispatch(clearList());
				Swal.fire({
					title: "Done!",
					text: "Your list cleared.",
					icon: "success",
				});
			}
		});
	};

	useEffect(() => {
		localStorage.setItem("watchList", JSON.stringify(watchList));
	}, [watchList]);

	return (
		<div>
			{watchList.length === 0 ? (
				<div className='flex justify-center items-center w-full  h-[200px] mt-20   '>
					<div className='flex justify-center items-center max-w-[60%] w-full h-full bg-slate-500 text-5xl font-semibold text-white rounded-3xl p-3'>
						No Movies Added Yet.
					</div>
				</div>
			) : (
				<div className='py-16'>
					<div className='flex justify-center items-center w-full py-3'>
						<button
							className='text-white font-bold text-4xl px-5 py-3 rounded-3xl bg-red-600'
							onClick={deleteAll}>
							Clear All
						</button>
					</div>
					<div className='relative container grid grid-cols-4 gap-10 w-full py-3'>
						{watchList.map((movie) => (
							<div
								key={movie.id}
								className='relative '>
								<Link
									to={`/details/${movie.id}`}
									className={` h-full w-[calc(100%-20px)] object-fill rounded-xl transition-all duration-500`}
									onClick={() => handelShow(movie.id)}>
									<img
										className='h-full w-full rounded-xl '
										src={`${imagePath}${movie.poster_path}`}
										alt=''
									/>
								</Link>
								<div
									className={`absolute flex justify-center items-center  bg-white font-bold text-[28xp] text-red-600 transition-all duration-500 border-black border-[7px] w-[40px] h-[40px] -top-2 -right-2 rounded-full cursor-pointer`}
									onClick={() => {
										deleteElement(movie.id);
									}}>
									<CgClose />
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default WatchList;
