import { Stepper } from "../components/Stepper.jsx";

export const ContactUs = () => {

	return(
		<>
			<img
				className="fixed h-screen w-full bg-cover object-cover -z-10"
				src="/images/bg-requester-form-1.avif"
				alt="Image" />

			<div className="w-full h-full flex flex-col justify-center max-w-[80rem] m-auto px-[5%]">
				<div className="text-right text-white text-4xl font-bold leading-normal">
					هر خانه یک داستان
				</div>
				<div className="rounded-2xl h-[25rem] py-10 px-12 backdrop-blur-md bg-black/20 rounded-2xl shadow-cardAuth mt-8">
					<Stepper/>
				</div>
			</div>
		</>
	)
}