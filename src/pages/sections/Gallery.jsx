export const Gallery = () => {
	return(
		<>
			<div className="mt-20">
				<h3 className="text-center text-white md:text-3xl text-xl font-bold">گالری</h3>
				<div className="max-w-[80rem] mx-auto grid grid-cols-3 gap-4 mt-10">
					<div className="">
						<img className="bg-cover object-cover h-full" src="/images/home-des-1.jpg" alt="Image" />
					</div>
					<div className="">
						<img className="bg-cover object-cover h-full" src="/images/home-des-2.jpg" alt="Image" />
					</div>
					<div className="row-span-2">
						<img className="bg-cover object-cover h-full" src="/images/home-banner.jpg" alt="Image" />
					</div>
					<div className="row-span-2">
						<img className="bg-cover object-cover h-full" src="/images/home-banner.jpg" alt="Image" />
					</div>
					<div className="">
						<img className="bg-cover object-cover h-full" src="/images/home-des-1.jpg" alt="Image" />
					</div>
					<div className="">
						<img className="bg-cover object-cover h-full" src="/images/home-des-2.jpg" alt="Image" />
					</div>
					<div className="">
						<img className="bg-cover object-cover h-full" src="/images/home-des-1.jpg" alt="Image" />
					</div>
				</div>
			</div>
		</>
	)
}