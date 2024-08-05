/** @format */

import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Pagination, Navigation, Autoplay} from "swiper/modules";
import Landing from "./Landing";
import "./landing.module.css";
import {useSelector} from "react-redux";

const LandingSwiper = () => {
	const {trending} = useSelector((state) => state.moviesStore);
	return (
		<div>
			<Swiper
				slidesPerView={1}
				spaceBetween={trending.length}
				centeredSlides={true}
				loop={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className='mySwiper w-full h-dvh '>
				{trending &&
					trending.map((movie) => {
						return (
							<SwiperSlide key={movie.id}>
								<Landing movie={movie} />
							</SwiperSlide>
						);
					})}
			</Swiper>
		</div>
	);
};

export default LandingSwiper;
