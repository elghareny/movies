/** @format */
import {BiSearch} from "react-icons/bi";
import {useEffect, useState} from "react";
import {CgClose} from "react-icons/cg";
import ListSearch from "./ListSearch";
import "../../index.css";
import {useDispatch} from "react-redux";
import {clearingSearch, getSearch} from "../../redux/slices/MoviesSlices";
import {Link} from "react-router-dom";
const Navbar = () => {
	const dispatch = useDispatch();

	const [isSearching, setIsSearching] = useState(false);
	const [search, setSearch] = useState("");
	const [colorNav, setColorNav] = useState("");

	const controlNav = () => {
		window.scrollY > 0
			? setColorNav("bg-black")
			: setColorNav("bg-transparent");
	};
	const handleSearchChange = (event) => {
		setSearch(event.target.value);
	};

	const handleSearch = () => {
		setIsSearching(!isSearching);
		setSearch("");
		dispatch(clearingSearch());
	};
	useEffect(() => {
		window.addEventListener("scroll", controlNav);
		const debounceSearch = setTimeout(() => {
			if (search) {
				dispatch(getSearch(search));
			}
		}, 1000);

		return () => {
			clearTimeout(debounceSearch);
		};
	}, [dispatch, search]);

	return (
		<nav
			className={`fixed top-0 w-full flex  justify-center items-center w ${colorNav}  transition-all ease-in-out duration-500 text-white z-50`}>
			<div className={`container px-2 py-4 flex justify-between items-center`}>
				<Link
					to='/'
					className='text-[20px] font-bold border-r-[3px] border-white pr-8 h-full'>
					<span className='text-red-600 text-[20px] font-bold line-through'>
						M
					</span>
					ovies
				</Link>
				<ul className='flex flex-row '>
					<li className='hover:text-red-600 hover:px-6 px-4 transition-all duration-500 cursor-pointer font-bold'>
						<Link
							to='/'
							className='text-[14px] font-semibold'>
							Home
						</Link>
					</li>
					<li className='hover:text-red-600 hover:px-6 px-4 transition-all duration-500 cursor-pointer font-bold'>
						<Link
							to='/watchList'
							className='text-[14px] font-semibold'>
							Your Movies
						</Link>
					</li>
				</ul>
				<div className='max-w-[20%] w-full flex items-center justify-end relative'>
					{!isSearching ? (
						<button
							onClick={handleSearch}
							type='button'
							className={`text-[20px] hover:text-red-600 px-3 transition-all duration-500`}>
							<i>
								<BiSearch />
							</i>
						</button>
					) : (
						<div
							className={`flex items-center gap-2 transition-all duration-500`}>
							<input
								className='text-[#333] text-[16px] font-semibold px-3 py-[2px] rounded-md outline-none'
								autoFocus
								type='search'
								value={search}
								onChange={handleSearchChange}
								placeholder='Search...'
							/>
							<button
								onClick={handleSearch}
								className='bg-white rounded-md p-[3px]'>
								<i className='text-[20px] text-red-600 font-extrabold'>
									<CgClose />
								</i>
							</button>
						</div>
					)}
					{search && <ListSearch handleSearch={handleSearch} />}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
