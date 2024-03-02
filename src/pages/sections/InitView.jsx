export const InitView = () => {
	return(
		<>
			<div className="">
				<div className="relative lg:h-[calc(100vh-5rem)] mx-auto overflow-hidden">
					<img
						className="lg:absolute -top-20 left-0 lg:w-1/2 w-full lg:filter-none brightness-50"
						src="/images/home-banner.jpg"
						alt="Image" />
					<div
						className="flex flex-col items-end justify-center absolute inset-0 sm:-top-32 -top-5 lg:mr-[21%] gap-y-7">
						<h2 className="lg:text-right text-center text-white md:text-4xl text-xl font-bold lg:mx-0 mx-auto">
							هر خانه یک داستان
						</h2>
						<p className="lg:text-right text-center md:text-xl text-base text-white w-80 lg:mx-0 mx-auto">
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
							است،
							چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
						</p>
						<button className="rounded-lg md:text-xl text-base md:px-20 px-10 md:py-3 py-1.5 md:font-bold font-normal text-white bg-primary lg:mx-0 mx-auto">
							شروع
						</button>
					</div>
				</div>
			</div>
		</>
	)
}