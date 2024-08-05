/** @format */

import {CircularProgress} from "@mui/material";
import {useSelector} from "react-redux";
import LandingSwiper from "../../components/landing/LandingSwiper";
import MoviesList from "../../components/moviesList/MoviesList";

const Home = () => {
	const {isLoading, error, genres} = useSelector((state) => state.moviesStore);

	return (
		<div>
			{isLoading.trendingLoading ? (
				<div className='my-20 flex justify-center items-center h-auto'>
					<CircularProgress
						color='error'
						size='100px'
					/>
				</div>
			) : (
				<LandingSwiper />
			)}

			<MoviesList
				error={error}
				genres={genres}
			/>

			{/* <FavoriteMovies /> */}
		</div>
	);
};

export default Home;
