/** @format */

// import disney from "../../assets/images/disney.png";
// import marvel from "../../assets/images/marvel.png";
// import nationalG from "../../assets/images/nationalG.png";
// import pixar from "../../assets/images/pixar.png";
// import starwar from "../../assets/images/starwar.png";

// import disneyv from "../../assets/Videos/disney.mp4";
// import marvelv from "../../assets/Videos/marvel.mp4";
// import nationalGv from "../../assets/Videos/national-geographic.mp4";
// import pixarv from "../../assets/Videos/pixar.mp4";
// import starwarv from "../../assets/Videos/star-wars.mp4";

import disney from "../../assets/images/disney.png";
import marvel from "../../assets/images/marvel.png";
import nationalG from "../../assets/images/nationalG.png";
import pixar from "../../assets/images/pixar.png";
import starwar from "../../assets/images/starwar.png";

import disneyv from "../../assets/Videos/disney.mp4";
import marvelv from "../../assets/Videos/marvel.mp4";
import nationalGv from "../../assets/Videos/national-geographic.mp4";
import pixarv from "../../assets/Videos/pixar.mp4";
import starwarv from "../../assets/Videos/star-wars.mp4";
const ProductionHouse = () => {
	const productionList = [
		{
			id: 1,
			image: disney,
			video: disneyv,
		},
		{
			id: 2,
			image: marvel,
			video: marvelv,
		},
		{
			id: 3,
			image: nationalG,
			video: nationalGv,
		},
		{
			id: 4,
			image: pixar,
			video: pixarv,
		},
		{
			id: 5,
			image: starwar,
			video: starwarv,
		},
	];
	return (
		<div className='container grid grid-cols-5 gap-5 p-5 m-auto  '>
			{productionList.map((item, index) => {
				return (
					<div
						key={index}
						className='relative border-[2px] border-gray-800 rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-black bg-gray-900'>
						<video
							src={item.video}
							autoPlay
							loop
							muted
							playsInline
							className='absolute top-0 rounded-2xl opacity-0 transition-all duration-300 ease-in-out hover:opacity-80'></video>
						<img
							className='rounded-2xl w-full h-full object-cover'
							src={item.image}
							alt=''
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProductionHouse;
