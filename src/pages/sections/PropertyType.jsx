export const PropertyType = () => {
	return(
		<>
			<div className="mx-auto flex lg:justify-between gap-y-10 mt-20 lg:mx-0 mx-5">
				<div className="flex flex-col lg:items-end items-center justify-center lg:pl-32 gap-y-5">
					<h3 className="lg:text-right text-center text-white md:text-3xl text-xl font-bold">انتخاب نوع ملک مورد نظر</h3>
					<p className="lg:text-right text-center text-white">
						ما بخش گسترده ای از نوع خانه را برای شما و خانواده شما فراهم می کنیم و در انتخاب مدل خانه آزاد
						هستیم
					</p>
					<div className="flex lg:flex-col flex-row lg:items-end items-center lg:gap-x-0 gap-x-7 gap-y-3">
						<div className="flex justify-center items-center gap-x-2">
							<p className="font-bold lg:text-xl md:text-base text-xs text-white text-right">بازسازی</p>
							<div className="bg-gray-200 lg:size-10 size-5 rounded-lg" />
						</div>
						<div className="flex justify-center items-center gap-x-2">
							<p className="font-bold lg:text-xl md:text-base text-xs text-white text-right">رهن / اجاره </p>
							<div className="bg-gray-200 lg:size-10 size-5 rounded-lg" />
						</div>
						<div className="flex justify-center items-center gap-x-2">
							<p className="font-bold lg:text-xl md:text-base text-xs text-white text-right">فروش </p>
							<div className="bg-gray-200 lg:size-10 size-5 rounded-lg" />
						</div>
					</div>
				</div>

				<div className="relative lg:block hidden">
					<div className="absolute top-52 right-0 bg-primary w-[40rem] h-[25rem] rounded-tl-3xl -z-10" />
					<img className="relative right-20 w-[30rem] h-[35rem]" src="/images/home-banner.jpg" alt="Image" />
				</div>
			</div>
		</>
	)
}