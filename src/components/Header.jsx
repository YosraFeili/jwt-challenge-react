import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header= () => {
	const [isActiveMenu, setIsActiveMenu] = useState(false)

	return (
		<>
			<nav className="bg-transparent">
				<div className="min-h-[5rem] max-w-[80rem] mx-auto flex items-center justify-between h-full px-[5%]">
					<div className="flex space-x-3 md:space-x-0">
						<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600">شروع</button>
					</div>
					<div className="">logo</div>
					<div className="items-center justify-between hidden w-full md:flex md:w-auto">
						<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
							<li>
								<Link to={'/contact-us'}>تماس با ما</Link>
							</li>
							<li>
								<Link to={'/'}>خانه</Link>
							</li>
						</ul>
					</div>

					{/*hamburger menu*/}
					<button
						className="flex md:hidden items-center px-3 py-2"
						onClick={()=>{setIsActiveMenu((isActiveMenu)=>!isActiveMenu)}}>
						<FontAwesomeIcon
							icon={faBars}
							className="text-white size-6"/>
					</button>

					{isActiveMenu && <div className="fixed top-[-1px] right-0 w-[100%] flex-col h-[calc(100vh-(-1px))] space-y-6 z-40">
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 w-full h-[100%]"/>
						<div className="fixed bottom-0 right-0 bottom-0 bg-white w-[80%] h-[100vh] overflow-y-auto">
							<div
								className="flex flex-col items-start mt-6 mb-8 mx-7"
								onClick={()=>{setIsActiveMenu(false)}}>
								<FontAwesomeIcon
									icon={faXmark}
									className="text-black size-6"/>
							</div>
							<ul className="flex flex-col items-end mx-7 gap-y-3">
								<li>
									<Link to={'/'}>خانه</Link>
								</li>
								<li>
									<Link to={'/contact-us'}>تماس با ما</Link>
								</li>
							</ul>
						</div>
					</div>}
				</div>
			</nav>
		</>
	)
}